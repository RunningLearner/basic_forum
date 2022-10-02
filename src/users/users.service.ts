import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(email: string) {
    const user = new User();

    user.email = email;
    await this.userRepository.save(user);

    return { message: '회원가입이 완료되었습니다.' };
  }
}
