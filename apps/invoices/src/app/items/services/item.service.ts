import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineItem } from '@invoices/api-interfaces';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  loadItem(itemId: string) {
    const url = `/api/line-items/${itemId}`;
    console.log('Loading item', url);
    return this.http.get<LineItem>(url);
  }
}
