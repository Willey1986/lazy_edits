import { Test } from '@nestjs/testing';
import { ApiWorkItemsController } from './api-work-items.controller';
import { ApiWorkItemsService } from './api-work-items.service';

describe('ApiWorkItemsController', () => {
  let controller: ApiWorkItemsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiWorkItemsService],
      controllers: [ApiWorkItemsController],
    }).compile();

    controller = module.get(ApiWorkItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
