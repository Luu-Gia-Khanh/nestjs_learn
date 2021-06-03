import { Module } from '@nestjs/common';
import { CakeService } from './cake.service';
import { CakeController } from './cake.controller';
import { CakeSchema } from './schema/cake_schema';
import {MongooseModule} from '@nestjs/mongoose';  

@Module({
  imports: [MongooseModule.forFeature([
      {name: 'Cake', schema: CakeSchema, collection:'cate_cake'}
    ]),
  ],
  controllers: [CakeController],
  providers: [CakeService]
})
export class CakeModule {}
