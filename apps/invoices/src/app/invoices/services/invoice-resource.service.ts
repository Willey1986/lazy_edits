import {Injectable} from '@angular/core';
import {Invoice} from "@invoices/api-interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceResourceService {

  constructor(private http: HttpClient) {
  }

  loadInvoice(id: string): Observable<Invoice> {
    const url = `/api/invoices/${id}`;
    return this.http.get<Invoice>(url);
  }

  saveInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `/api/invoices`;
    return this.http.post<Invoice>(url, invoice);
  }
}
