import { Body, Controller, Get, Logger, LoggerService, Param, Post, Query } from '@nestjs/common';
import { ApiInvoicesService } from './api-invoices.service';
import { Invoice } from '@invoices/api-interfaces';
import { InvoiceDto } from './invoice.dto';
import { ApiQuery } from '@nestjs/swagger';
import { ToIntPipe } from '@invoices/api/util';

@Controller('invoices')
export class ApiInvoicesController {

  private readonly logger = new Logger(ApiInvoicesController.name);

  constructor(private apiInvoicesService: ApiInvoicesService) {
  }

  @ApiQuery({ name: 'page', required: false, description: 'Page to start at', type: Number })
  @ApiQuery({ name: 'perPage', required: false, description: 'Results per page', type: Number })
  @ApiQuery({ name: 'product', required: false, description: 'Product type listed on the invoice' })
  @ApiQuery({ name: 'companyName', description: 'Invoicee' })
  @Get('')
  getLineItems(@Query('page', new ToIntPipe()) page = 1, @Query('perPage', new ToIntPipe()) perPage = 10, @Query('companyName') companyName: string, @Query('product') product = ''): Invoice[] {
    this.logger.log(`Paging: ${page}, ${perPage}`);
    return this.apiInvoicesService.getInvoices(page, perPage, companyName, product);
  }

  @Get(':id')
  getInvoiceById(@Param('id') id: string) {
    return this.apiInvoicesService.getInvoiceById(id);
  }

  @Post('')
  createInvoice(@Body() invoice: InvoiceDto) {
    return this.apiInvoicesService.addInvoice(invoice);
  }
}
