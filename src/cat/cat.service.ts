import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {Cat} from './entities/cat.entity';

@Injectable()
export class CatService {
   private cat : Cat[] = [];
  // const cat = new Map();
  create(createCatDto: CreateCatDto) {
      createCatDto.id = Math.random().toString();
      return this.cat.push(createCatDto);
  }

  findAll() {
    return {...this.cat};
  }

  findOne(id: string) {
    const findCat = this.cat.find((subCat) => subCat.id === id);
    if(!findCat){
      throw new NotFoundException('can not find');
    }
    return {...findCat};
  }

  // update(id: string, name: string, age:number) {
  //   const findCat = this.cat.find((subCat) => subCat.id === id);
  //   if(!findCat){
  //     throw new NotFoundException('can not find');
  //   }
  //   else{
  //     const newCat = new Cat(id, name, age);
  //     newCat.name = name;
  //     newCat.age = age;
      
  //   }
  // }

  remove(id: string){
    //const map = new Map();
    const findCat = this.cat.find((subCat) => subCat.id === id);
    if(!findCat){
      throw new NotFoundException('can not find');
    }
    else{
      let removeIndex = this.cat.map(function(item) { return item.id; }).indexOf(id);
      this.cat.splice(removeIndex,1);
    }
    
  }
}
