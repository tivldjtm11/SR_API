import { Test, TestingModule } from '@nestjs/testing';
import { GetPayInfoController } from './get-pay-info.controller';

describe('GetPayInfoController', () => {
  let controller: GetPayInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPayInfoController],
    }).compile();

    controller = module.get<GetPayInfoController>(GetPayInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
