import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { Cake } from './entities/cake.entity';

@Injectable()
export class CakeService {
  constructor(@InjectModel('Cake') private readonly cateCake: Model<Cake>){}
  create(createCakeDto: CreateCakeDto) {
    const newCake = new this.cateCake(createCakeDto);
    const result = newCake.save();
    return result;
  }

  findAll() {
    return this.cateCake.find().exec();
  }

  async findOne(id: string) {
    return await this.cateCake.findById(id);
  }

  update(id: number, updateCakeDto: UpdateCakeDto) {
    return `This action updates a #${id} cake`;
  }

  async remove(id: string) {
    return await this.cateCake.findByIdAndDelete(id);
  }
}
