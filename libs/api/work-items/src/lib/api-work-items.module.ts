import { Module, Global } from '@nestjs/common';
import { ApiWorkItemsService } from './api-work-items.service';
import { ApiWorkItemsController } from './api-work-items.controller';

@Module({
  controllers: [ApiWorkItemsController],
  providers: [ApiWorkItemsService],
  exports: [ApiWorkItemsService],
})
export class ApiWorkItemsModule {}
