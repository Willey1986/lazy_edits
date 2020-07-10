import {Injectable} from '@angular/core';
import {ApiResponse, LineItem} from "@invoices/api-interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsResourceService {

  constructor(private http: HttpClient) {
  }

  loadLineItems(productName?: string, page = 1, perPage = 10) {
    let url = `/api/line-items?page=${page}&perPage=${perPage}`;
    if (productName) {
      url = `${url}&product=${productName}`;
    }
    return this.http.get<ApiResponse<LineItem>>(url);
  }
}
