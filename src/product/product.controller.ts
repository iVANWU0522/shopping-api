import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('product')
export class ProductController {
    products = [
        { id: 1, name: 'One Plus 7', price: 48000 },
        { id: 2, name: 'I Phone X', price: 64999 },
    ];
    @Get()
    GetProducts() {
        return this.products;
    }

    @Post()
    AddProduct(@Req() req: Request) {
        this.products.push(req.body);
        return req.body.id;
    }
}
