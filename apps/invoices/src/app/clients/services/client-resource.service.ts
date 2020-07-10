import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Company } from '@invoices/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientResourceService {

  constructor(private http: HttpClient) { }

  loadCompanies(companyName?: string, page = 1, perPage = 10) {
    let url = `/api/companies?page=${page}&perPage=${perPage}`;
    if (companyName) {
      url = `${url}&companyName=${companyName}`;
    }
    return this.http.get<ApiResponse<Company>>(url);
  }
}
