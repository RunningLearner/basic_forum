import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfoDto } from './DTO/userInfoDto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(userInfo: UserInfoDto) {
    const user = new User();

    user.email = userInfo.email;
    user.password = userInfo.password;
    user.company = userInfo.company;
    await this.userRepository.save(user);

    return { message: '회원가입이 완료되었습니다.' };
  }

  async findUser(userEmail: string) {
    const user = await this.userRepository.findOne({
      where: { email: userEmail },
    });

    return user;
  }
}
