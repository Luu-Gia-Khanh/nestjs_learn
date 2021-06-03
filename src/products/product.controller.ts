import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {ProductService} from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get('test')
    getTest(){
        return this.productService.getTest();
    }

    @Post('add-product')
    postProduct(
        @Body('name') name: string,
        @Body('desc') desc: string,
        @Body('price') price: number,
    ){
        return this.productService.addProduct(name, desc, price);
    }

    @Get('all-product')
    getAllProduct(){
        return this.productService.getAllProduct();
    }

    @Get('find-product/:id')
    getFindProduct(@Param('id') id: string){
        return this.productService.findProduct(id);
    }
}