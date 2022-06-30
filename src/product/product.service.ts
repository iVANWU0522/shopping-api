import { Injectable, Inject } from '@nestjs/common';
import { PRODUCT, Product } from './product.token';
import { DbproviderService } from 'src/dbprovider/dbprovider.service';
import { TransientdemoService } from 'src/transientdemo/transientdemo.service';
import { RequestdemoService } from 'src/requestdemo/requestdemo.service';

@Injectable()
export class ProductService {
    products = [
        { id: 1, name: 'One Plus 7', price: 48000 },
        { id: 2, name: 'I Phone X', price: 64999 }
    ];

    constructor(@Inject(PRODUCT) product: Product,
        @Inject('ClientConnection') dbProviderService: DbproviderService,
        private transientService: TransientdemoService,
        private requestService: RequestdemoService,
    ) {
        console.log(product.endPoint);
        console.log(dbProviderService.getProductsForClient())
    }

    getProducts() {
        return this.products;
    }

    addProduct(product: any) {
        this.products.push(product);
    }

    getProductById(id: number) {
        return this.products.find(p => p.id === id);
    }

}