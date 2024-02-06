import { User } from '../../../entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { faker } from '@faker-js/faker';

export class UserSeeds {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  private logger = new Logger(UserSeeds.name);

  async run() {
    await Promise.all([
      ...[...Array(10).keys()].map(() => {
        return this.userRepository.save(
          this.userRepository.create({
            name: faker.person.fullName(),
            rank: faker.phone.number(),
            password: 'admin@123',
          }),
        );
      }),
    ]);
  }
}
