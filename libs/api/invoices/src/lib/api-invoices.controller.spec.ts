import { Test } from '@nestjs/testing';
import { ApiInvoicesController } from './api-invoices.controller';
import { ApiInvoicesService } from './api-invoices.service';

describe('ApiInvoicesController', () => {
  let controller: ApiInvoicesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiInvoicesService],
      controllers: [ApiInvoicesController],
    }).compile();

    controller = module.get(ApiInvoicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
