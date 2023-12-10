import { Test, TestingModule } from '@nestjs/testing';
import { GetPayInfoService } from './get-pay-info.service';

describe('GetPayInfoService', () => {
  let service: GetPayInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetPayInfoService],
    }).compile();

    service = module.get<GetPayInfoService>(GetPayInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
