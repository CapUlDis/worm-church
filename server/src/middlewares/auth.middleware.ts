import {Injectable, Logger, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';
import {CryptoService} from 'src/crypto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private logger = new Logger(AuthMiddleware.name);

  constructor(private readonly cryptoService: CryptoService) {}

  use(request: Request, response: Response, next: NextFunction) {
    const token = this.extractTokenFromHeader(request);

    const launchParams = new URLSearchParams(token);

    console.log(token);

    if (
      !launchParams.size ||
      !launchParams.has('sign') ||
      !launchParams.has('vk_ts') ||
      !launchParams.has('vk_user_id')
    ) {
      this.logger.error('Missing launch params');
      throw new UnauthorizedException('Invalid launch parameters');
    }

    const sign = launchParams.get('sign');
    launchParams.delete('sign');
    launchParams.sort();

    const paramsHash = this.cryptoService.encryptSha256(launchParams.toString(), process.env.VK_APP_SECRET_KEY);

    if (paramsHash !== sign) {
      this.logger.error('Invalid launch params hash');
      throw new UnauthorizedException('Invalid launch parameters');
    }

    const nowTs = Date.now();
    const hourBefore = new Date(nowTs - 60 * 60 * 1000);
    const now = new Date(nowTs);
    const vkTsDate = new Date(Number(launchParams.get('vk_ts')) * 1000);

    if (vkTsDate < hourBefore || vkTsDate > now) {
      this.logger.error('Obsolete launch params');
      throw new UnauthorizedException('Invalid launch parameters');
    }

    next();
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
