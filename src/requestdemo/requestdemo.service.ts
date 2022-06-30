import { Injectable, Scope } from '@nestjs/common';

@Injectable({
    scope: Scope.REQUEST
})
export class RequestdemoService {
    constructor() {
        console.log('new instance of request');
    }
}