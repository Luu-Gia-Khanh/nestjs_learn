import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    age: {type: Number, required: true}
});
 export interface User{
    id: string,
    name: string,
    age: number,
 }
