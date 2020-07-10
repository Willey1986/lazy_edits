import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiWorkItemsModule } from '@invoices/api/work-items';
import { ApiCompaniesModule } from '@invoices/api/companies';
import { ApiInvoicesModule } from '@invoices/api/invoices';

@Module({
  imports: [ApiWorkItemsModule, ApiCompaniesModule, ApiInvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
