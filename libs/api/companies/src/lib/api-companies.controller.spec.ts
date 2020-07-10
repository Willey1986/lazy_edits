import { Test } from '@nestjs/testing';
import { ApiCompaniesController } from './api-companies.controller';
import { ApiCompaniesService } from './api-companies.service';

describe('ApiCompaniesController', () => {
  let controller: ApiCompaniesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCompaniesService],
      controllers: [ApiCompaniesController],
    }).compile();

    controller = module.get(ApiCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
