import * as mongoose from 'mongoose';
import {IsString, IsInt} from 'class-validator';

 export class User{
    @IsString()
    readonly id: string;
    @IsString()
    readonly name: string;
    @IsInt()
    readonly age: number;
 }
 export const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    age: {type: Number, required: true}
});
