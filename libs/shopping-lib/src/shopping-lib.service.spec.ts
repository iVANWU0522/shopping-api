import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingLibService } from './shopping-lib.service';

describe('ShoppingLibService', () => {
  let service: ShoppingLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingLibService],
    }).compile();

    service = module.get<ShoppingLibService>(ShoppingLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
