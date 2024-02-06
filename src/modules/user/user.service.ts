import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  //
  // async findAll() {
  //   return await this.userRepository.find();
  // }
  //
  // async findOne(id: number) {
  //   return await this.userRepository.findOne({ where: { id } });
  // }
  //
  async create(user: User) {
    const userNew = this.userRepository.create(user);
    return await this.userRepository.save(userNew);
  }
  //
  // async update(user: User) {
  //   const updateUser = this.userRepository.create(user);
  //   this.userRepository.merge(updateUser, user);
  //   return await this.userRepository.save(updateUser);
  // }
  //
  // async delete(id: number) {
  //   return await this.userRepository.delete(id);
  // }
}
