import { Test, TestingModule } from '@nestjs/testing';
import { GetDonorInfoController } from './get-donor-info.controller';

describe('GetDonorInfoController', () => {
  let controller: GetDonorInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetDonorInfoController],
    }).compile();

    controller = module.get<GetDonorInfoController>(GetDonorInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
