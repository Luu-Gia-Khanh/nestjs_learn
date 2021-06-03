import { IsString, IsInt, IsObject } from 'class-validator';

export class CreateCakeDto {

    
    @IsString()
    name: string;

    @IsInt()
    price: number;
}
