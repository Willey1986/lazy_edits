import { Injectable, Logger } from '@nestjs/common';
import { Company, Invoice, LineItem } from '@invoices/api-interfaces';
import { companies, lineItems } from '@invoices/data';

@Injectable()
export class ApiInvoicesService {
  private db: Invoice[] = [];
  private readonly logger = new Logger(ApiInvoicesService.name);

  constructor() {

    for (let i = 0; i < 1000; i++) {
      const company = this.getRandomCompany();
      const id = this.getId();
      const li = this.getRandomItems();
      const invoice = {
        id,
        company,
        lineItems: li
      };
      this.db.push(invoice);
    }

    const counts = this.db.map(c => c.company.companyName).reduce((all, name) => { all[name] = all[name] ? all[name] + 1 : 1; return all; }, {});
    const names = Object.entries(counts).map((key, val) => `${key}`);
    this.logger.log(`Created invoices for: ${names.join(', ') }`);
  }

  addInvoice(invoice: Invoice): string {
    if (invoice.id && invoice.id !== 'new') {
      throw new Error('Invoice can\'t have an id.');
    }

    invoice.id = `${this.getId()}`;
    this.db.push(invoice);
    return invoice.id;
  }

  getInvoiceById(id: string): Invoice {
    return this.db.find(i => i.id === id);
  }

  getInvoices(page = 1, perPage = 10, companyName: string, product?: string): Invoice[] {
    if (!companyName) {
      throw new Error('Company name is mandatory.');
    }
    const limit = perPage < 10 && perPage > 0 ? perPage : 10;
    const from = page < 1 ? 1 : page;
    const offset = (from - 1) * limit;
    const end = offset + limit;

    let invoices = this.db.filter(inv => inv.company.companyName.toLowerCase() === companyName.toLowerCase());
    if (product) {
      invoices = invoices.filter(inv => inv.lineItems.filter(item => item.product.toLowerCase().includes(product.toLowerCase())));
    }
    return invoices.slice(offset, end);
  }

  // quick and dirty
  private getId() {
    return new Date().toISOString();
  }

  private getRandomCompany(): Company {
    return companies[Math.floor(Math.random() * 1000)];
  }

  private getRandomItem(): LineItem {
    return lineItems[Math.floor(Math.random() * 1000)];
  }

  private getRandomItems(): LineItem[] {
    const howMuch = Math.ceil(Math.random() * 5);
    const items = [];
    for (let i = 0; i < howMuch; i++) {
      items.push(this.getRandomItem());
    }
    return items;
  }
}


