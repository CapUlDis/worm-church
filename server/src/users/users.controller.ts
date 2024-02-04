import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
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

  @Get(':vkId')
  async getUser(@Param('vkId') vkId: string) {
    const totalUsers = await this.usersService.getTotalUsers();

    const user = await this.usersService.getUser(vkId);

    return {
      user,
      totalUsers,
    };
  }

  @Post()
  async checkParentAndCreateUser(@Body() creatUserDto: CreateUserDto) {
    const parentId = this.cryptoService.decryptData(creatUserDto.parentHash);

    const newUser = await this.usersService.createUser({vkId: creatUserDto.vkId, parentId});

    const totalUsers = await this.usersService.getTotalUsers();

    const childHash = await this.cryptoService.encryptData(creatUserDto.vkId.toString());

    return {
      ...newUser,
      childHash,
      totalUsers,
    };
  }
}
