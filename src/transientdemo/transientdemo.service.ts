import { Injectable, Scope } from '@nestjs/common';

@Injectable({
    scope: Scope.TRANSIENT
})
export class TransientdemoService {

    constructor() {
        console.log('new transient instance created');
    }
}