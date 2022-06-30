import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingLibModule } from '@app/shopping-lib';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { PRODUCT, Product_Token } from './product/product.token';
import { dbConnectionFactory } from './connection.provider';
import { ClientService } from './client/client.service';
import { RequestdemoService } from './requestdemo/requestdemo.service';
import { TransientdemoService } from './transientdemo/transientdemo.service';

@Module({
    imports: [ShoppingLibModule],
    controllers: [AppController, ProductController],
    providers: [
        {
            provide: PRODUCT,
            useValue: Product_Token,
        },
        AppService, 
        ProductService,
        dbConnectionFactory,
        ClientService,
        RequestdemoService,
        TransientdemoService,
    ],
})
export class AppModule { }