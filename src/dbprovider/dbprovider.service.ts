import { Injectable } from '@nestjs/common';

@Injectable()
export class DbproviderService {

    constructor(private connection: string) { }

    getProductsForClient() {
        return this.connection;
    }
}