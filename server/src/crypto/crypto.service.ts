import {ForbiddenException, Injectable, Logger} from '@nestjs/common';
import {createCipheriv, createDecipheriv, createHash} from 'node:crypto';

@Injectable()
export class CryptoService {
  private readonly logger: Logger;
  private readonly key: string;
  private readonly encryptionIV: string;

  constructor() {
    this.logger = new Logger(CryptoService.name);
    this.key = createHash('sha512')
      .update(process.env.HASH_KEY_SECRET ?? '')
      .digest('hex')
      .substring(0, 32);
    this.encryptionIV = createHash('sha512')
      .update(process.env.HASH_IV_SECRET ?? '')
      .digest('hex')
      .substring(0, 16);
  }

  encryptData(data: string) {
    const cipher = createCipheriv('aes-256-cbc', this.key, this.encryptionIV);

    return Buffer.from(cipher.update(data, 'utf8', 'hex') + cipher.final('hex')).toString('base64');
  }

  decryptData(encryptedData: string) {
    try {
      const buff = Buffer.from(encryptedData, 'base64');
      const decipher = createDecipheriv('aes-256-cbc', this.key, this.encryptionIV);

      return decipher.update(buff.toString('utf8'), 'hex', 'utf8') + decipher.final('utf8');
    } catch (error) {
      this.logger.error("Invalid link's hash", error instanceof Error ? error.stack : '');

      throw new ForbiddenException('Некорректная ссылка');
    }
  }
}
