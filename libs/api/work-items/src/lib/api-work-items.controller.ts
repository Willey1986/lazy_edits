import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiWorkItemsService } from './api-work-items.service';
import { LineItem } from '@invoices/api-interfaces';
import { ApiQuery } from '@nestjs/swagger';
import { ToIntPipe } from '@invoices/api/util';

@Controller('line-items')
export class ApiWorkItemsController {

  constructor(private apiWorkItemsService: ApiWorkItemsService) {}

  @ApiQuery({ name: 'page', required: false, description: 'Page to start at', type: Number })
  @ApiQuery({ name: 'perPage', required: false, description: 'Results per page', type: Number })
  @ApiQuery({ name: 'product', required: false, description: 'Product type listed on the invoice' })
  @Get('')
  getLineItems(@Query('page', new ToIntPipe()) page?: number, @Query('perPage', new ToIntPipe()) perPage?: number, @Query('product') product?: string): LineItem[] {
    return this.apiWorkItemsService.getItems(page, perPage, product);
  }

  @Get(':itemId')
  getCompany(@Param('itemId') itemId: string) {
    return this.apiWorkItemsService.getItemById(itemId);
  }
}
