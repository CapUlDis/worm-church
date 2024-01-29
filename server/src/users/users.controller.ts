import {Body, Controller, Logger, Post} from '@nestjs/common';
import {CryptoService} from 'src/crypto';

import {CreateUserDto} from './dto/create-user.dto';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
  private readonly logger: Logger;

  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
  ) {
    this.logger = new Logger(UsersController.name);
  }

  @Post()
  async checkParentAndCreateUser(@Body() creatUserDto: CreateUserDto) {
    const parentId = parseInt(this.cryptoService.decryptData(creatUserDto.parentHash), 10);

    const newUser = await this.usersService.createUser({vkId: creatUserDto.vkId, parentId});

    const childHash = await this.cryptoService.encryptData(creatUserDto.vkId.toString());

    return {
      ...newUser,
      childHash,
    };
  }
}
