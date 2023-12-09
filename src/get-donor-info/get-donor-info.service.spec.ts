import { Test, TestingModule } from '@nestjs/testing';
import { GetDonorInfoService } from './get-donor-info.service';

describe('GetDonorInfoService', () => {
  let service: GetDonorInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDonorInfoService],
    }).compile();

    service = module.get<GetDonorInfoService>(GetDonorInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
