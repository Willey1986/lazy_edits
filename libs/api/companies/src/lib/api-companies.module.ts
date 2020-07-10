import { Module, Global } from '@nestjs/common';
import { ApiCompaniesService } from './api-companies.service';
import { ApiCompaniesController } from './api-companies.controller';

@Global()
@Module({
  controllers: [ApiCompaniesController],
  providers: [ApiCompaniesService],
  exports: [ApiCompaniesService],
})
export class ApiCompaniesModule {}
