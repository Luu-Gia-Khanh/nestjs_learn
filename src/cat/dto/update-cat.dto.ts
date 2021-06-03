import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    constructor(
        public id: string,
        public name: string,
        public age: number,
    ){
        super();
    }
}
