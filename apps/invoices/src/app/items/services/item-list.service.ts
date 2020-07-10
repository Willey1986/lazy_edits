import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineItem } from '@invoices/api-interfaces';

@Injectable()
export class ItemListService {

  constructor(private http: HttpClient) { }

  loadItems(page: number, perPage: number, product?: string) {

    let url = `/api/line-items?page=${page}&perPage=${perPage}`;
    if (product) {
      url = `${url}&product=${product}`;
    }
    console.log('Loading items', url);
    return this.http.get<LineItem[]>(url);
  }
}
