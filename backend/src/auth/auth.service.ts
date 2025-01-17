import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(id: string, email: string, name: string): Promise<User> {
    let user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      user = this.userRepository.create({
        id,
        email,
        name,
      });
      await this.userRepository.save(user);
    }

    return user;
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
