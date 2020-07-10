import { Injectable } from '@nestjs/common';
import { lineItems } from '@invoices/data';
import { Company, LineItem } from '@invoices/api-interfaces';

@Injectable()
export class ApiWorkItemsService {
  private db = lineItems;

  getItems(page = 1, perPage = 10, product?: string): LineItem[] {
    const limit = perPage < 50 && perPage > 0 ? perPage : 50;
    const from = page < 1 ? 1 : page;
    const offset = (from - 1) * limit;
    const end = offset + limit;
    let items = this.db;
    if (product) {
      items = this.db.filter(item => item.product.toLowerCase().includes(product.toLowerCase()));
    }
    return items.slice(offset, end);
  }

  getItemById(itemId: string): LineItem {
    return this.db.find(c => c.id === itemId);
  }
}
