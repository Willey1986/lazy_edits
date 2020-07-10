import { Test } from '@nestjs/testing';
import { ApiCompaniesService } from './api-companies.service';

describe('ApiCompaniesService', () => {
  let service: ApiCompaniesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCompaniesService],
    }).compile();

    service = module.get(ApiCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
