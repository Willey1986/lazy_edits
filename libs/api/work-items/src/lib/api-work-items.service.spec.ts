import { Test } from '@nestjs/testing';
import { ApiWorkItemsService } from './api-work-items.service';

describe('ApiWorkItemsService', () => {
  let service: ApiWorkItemsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiWorkItemsService],
    }).compile();

    service = module.get(ApiWorkItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
