import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiCompaniesService } from './api-companies.service';
import { ApiResponse, Company } from '@invoices/api-interfaces';
import { ApiQuery } from '@nestjs/swagger';
import { UpdateCompanyDto } from './update-company.dto';
import { ToIntPipe } from '@invoices/api/util';

@Controller('companies')
export class ApiCompaniesController {
  constructor(private service: ApiCompaniesService) {}

  @ApiQuery({ name: 'page', required: false, description: 'Page to start at', type: Number })
  @ApiQuery({ name: 'perPage', required: false, description: 'Results per page', type: Number })
  @ApiQuery({ name: 'companyName', description: 'Invoicee', required: false })
  @Get('')
  getData(@Query('page', new ToIntPipe()) page?: number, @Query('perPage', new ToIntPipe()) perPage?: number, @Query('companyName') companyName?: string): ApiResponse<Company> {
    return this.service.getCompanies(page, perPage, companyName);
  }

  @Get(':companyId')
  getCompany(@Param('companyId') companyId: string) {
    return this.service.getCompanyById(companyId);
  }

  @Put(':companyId')
  putCompany(@Param('companyId') companyId: string, @Body() update: UpdateCompanyDto) {
    return this.service.updateCompany(companyId, update);
  }
}
