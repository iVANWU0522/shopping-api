import { Test, TestingModule } from '@nestjs/testing';
import { RequestdemoService } from './requestdemo.service';

describe('RequestdemoService', () => {
  let service: RequestdemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestdemoService],
    }).compile();

    service = module.get<RequestdemoService>(RequestdemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
