import { Test, TestingModule } from '@nestjs/testing';
import { TransientdemoService } from './transientdemo.service';

describe('TransientdemoService', () => {
  let service: TransientdemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransientdemoService],
    }).compile();

    service = module.get<TransientdemoService>(TransientdemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
