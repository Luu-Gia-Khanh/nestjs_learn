import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { User } from './user.model';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>){}
  async create(name: string, age: number) {
    try {
      if(name != null && age != null){
        const newUser = new this.userModel({name: name, age: age});
        const result = await newUser.save();
        return "ok";
      }
      else{
        throw new NotFoundException("can not add");
      }
    } catch (error) {
      error;
    }
    
  }

  // async findAll() {
  //     const findAllUser = await this.userModel.find();
  //     return findAllUser;
  // }
  async findAll(): Promise<User[]>{
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    let resultFind ;
    try {
      resultFind = await this.userModel.findById(id);
    } catch (error) {
      throw new NotFoundException('can not find');
    }
    if(!resultFind){
      throw new NotFoundException('can not find');
    }
    else{
      return resultFind;
    }
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const resultUpdate = await this.userModel.findByIdAndUpdate(id, updateUserDto)
    if(!resultUpdate){
      throw new NotFoundException('can not find id to update');
    }
    return resultUpdate;
  }

  async remove(id: string): Promise<User>{
    const resultDelete = await this.userModel.findByIdAndDelete(id);
    if(!resultDelete){
      throw new NotFoundException('can not find id to update');
    }
    return resultDelete;
  }
}
