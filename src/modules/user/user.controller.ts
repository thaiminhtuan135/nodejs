import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user';
import { Repository } from 'typeorm';

@Controller('user')
export class UserController {
  // constructor(private readonly userService: UserService) {}
  // constructor(
  //   @InjectRepository(User) private readonly userRepository: Repository<User>,
  // ) {}
  @Get('hi')
  find() {
    return 'tuandeptriu';
  }
}
