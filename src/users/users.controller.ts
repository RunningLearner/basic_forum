import { Body, Controller, Post } from '@nestjs/common';
import { UserInfoDto } from './DTO/userInfoDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() userInfo: UserInfoDto) {
    return this.usersService.createUser(userInfo);
  }
}
