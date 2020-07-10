import { Injectable } from '@nestjs/common';
import { companies } from '@invoices/data';
import { Company } from '@invoices/api-interfaces';
import { UpdateCompanyDto } from './update-company.dto';
import { ResourceData } from './types';

@Injectable()
export class ApiCompaniesService {
  private db = companies;

  constructor() {}
  getCompanies(page = 1, perPage = 10, companyName?: string): ResourceData<Company> {

    const limit = perPage < 10 && perPage > 0 ? perPage : 10;
    const from = page < 1 ? 1 : page;
    const offset = (from - 1) * limit;
    const end = offset + limit;

    let comp = this.db;
    if (companyName) {
      comp = comp.filter(company => company.companyName.toLowerCase().includes(companyName.toLowerCase()))
    }
    return {
      data: comp.slice(offset, end),
      count: this.db.length,
    };
  }

  getCompanyById(companyId: string): Company {
    return this.db.find(c => c.id === companyId);
  }

  updateCompany(companyId: string, data: UpdateCompanyDto): Company {
    const company = this.db.find(c => c.id === companyId);
    for (const [key, value] of Object.entries(data)) {
      if (company[key] !== value) {
        company[key] = value;
      }
    }
    return company;
  }
}
