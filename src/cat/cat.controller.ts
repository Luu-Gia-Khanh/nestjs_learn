import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.catService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body('name') name: string, @Body('age') age: number) {
  //   return this.catService.update(id, name, age);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(id);
  }
}
