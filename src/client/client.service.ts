import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {

    getClientDetails() {
        return {
            client: 'test',
            db: 'databaseconnection'
        };
    }
}