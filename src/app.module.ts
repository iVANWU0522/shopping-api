import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingLibModule } from '@app/shopping-lib';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
    imports: [ShoppingLibModule],
    controllers: [AppController, ProductController],
    providers: [
        AppService, 
        ProductService,
    ],
})
export class AppModule { }