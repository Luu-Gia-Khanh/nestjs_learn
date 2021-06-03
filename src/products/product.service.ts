import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService{

    private products : Product[] = [];

    getTest(){
        return "getTest";
    }
    addProduct(name: string, desc: string, price:number){
        const id: string = Math.random().toString();
        const newProduct = new Product(id, name, desc, price);
        this.products.push(newProduct);
        return id;
    }
    getAllProduct(){
        return [...this.products];
    }

    findProduct(id: string){
        const prodFind = this.products.find((prod) => prod.id === id);
        if(!prodFind){
            throw new NotFoundException('can not find product');
        }
        return {...prodFind}
    }
}