import { ClientService } from "./client/client.service";
import { DbproviderService } from "./dbprovider/dbprovider.service";

export const dbConnectionFactory = {
    provide: 'ClientConnection',
    useFactory: (clientSerice: ClientService) => {
        return new DbproviderService(clientSerice.getClientDetails().db);
    },
    inject: [ClientService]
};

