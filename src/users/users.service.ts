import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser, User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<IUser> {
    const existingUser = await this.usersRepository.findOneBy({ id: user.id });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.usersRepository.find();

    return users;
  }

  async find(id: string): Promise<IUser> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async remove(id: string) {
    const user = await this.usersRepository.delete(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
