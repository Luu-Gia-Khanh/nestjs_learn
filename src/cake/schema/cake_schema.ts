import * as mongoose from 'mongoose';

export const CakeSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
});