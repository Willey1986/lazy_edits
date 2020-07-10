import { Test } from '@nestjs/testing';
import { ApiInvoicesService } from './api-invoices.service';

describe('ApiInvoicesService', () => {
  let service: ApiInvoicesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiInvoicesService],
    }).compile();

    service = module.get(ApiInvoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
