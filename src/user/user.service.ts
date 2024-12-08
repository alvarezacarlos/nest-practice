import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

  // inject the user repository in our User Service
  constructor(@InjectRepository(User) private UserRepo: Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    /**
     * create the user using the repository just injected
     * and using the object received from the user.controller create ep
     */
    const user = await this.UserRepo.create(createUserDto)

    /**
     * insert the user in the db
     */
    return await this.UserRepo.save(user)
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}