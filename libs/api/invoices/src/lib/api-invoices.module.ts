import { Module, Global } from '@nestjs/common';
import { ApiInvoicesService } from './api-invoices.service';
import { ApiInvoicesController } from './api-invoices.controller';

@Global()
@Module({
  controllers: [ApiInvoicesController],
  providers: [ApiInvoicesService],
  exports: [ApiInvoicesService],
})
export class ApiInvoicesModule {}
