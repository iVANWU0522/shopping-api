import { Module } from '@nestjs/common';
import { ShoppingLibService } from './shopping-lib.service';

@Module({
  providers: [ShoppingLibService],
  exports: [ShoppingLibService],
})
export class ShoppingLibModule {}
