import { Injectable } from '@angular/core';
import { Invoice } from '@invoices/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InvoiceListService {

  constructor(private http: HttpClient) { }

  loadInvoices(companyName: string, page: number, perPage: number) {

    let url = `/api/invoices?page=${page}&perPage=${perPage}`;
    if (companyName) {
      url = `${url}&companyName=${companyName}`;
    }
    console.log('Loading invoices', url);
    return this.http.get<Invoice[]>(url);
  }
}
