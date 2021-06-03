import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { CakeService } from './cake.service';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { ParseIntPipe } from './schema/parse-int.pipe';
import { ValidationPipe } from './schema/validation.pipe';
import { Cake } from './entities/cake.entity';

@Controller('cake')
export class CakeController {
  constructor(private readonly cakeService: CakeService) {}

  @Post()
  async create(@Body(ValidationPipe) createCakeDto: CreateCakeDto) {
    return this.cakeService.create(createCakeDto);
  }

  @Get()
  findAll() {
    return this.cakeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ValidationPipe()) id: string): Promise<Cake> {
    return this.cakeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    return this.cakeService.update(+id, updateCakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cakeService.remove(id);
  }
}
