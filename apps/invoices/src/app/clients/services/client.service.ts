import { Injectable } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  loadCompany(companyId: string): Observable<Company> {
    // mat-paginator is zero-indexed for the page number, we have to adjust
    let url = `/api/companies/${companyId}`;
    console.log('Loading client', url);
    return this.http.get<Company>(url);
  }
}
