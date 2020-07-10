import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '@invoices/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  loadInvoice(invoiceId: string): Observable<Invoice> {
    const url = `/api/invoices/${invoiceId}`;
    console.log('Loading invoice', url);
    return this.http.get<Invoice>(url);
  }
}
