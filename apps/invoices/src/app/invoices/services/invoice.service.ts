import {Injectable} from '@angular/core';
import {InvoiceEditState, InvoiceEditStateObject} from "../states/InvoiceEditState";
import {map} from "rxjs/operators";
import {ApiResponse, Company, Invoice, LineItem} from "@invoices/api-interfaces";
import {Observable} from "rxjs";
import {ClientResourceService} from "../../clients/services/client-resource.service";
import {ItemsResourceService} from "../../items/services/items-resource.service";

@Injectable()
export class InvoiceService {

  constructor(private invoiceEditState: InvoiceEditState,
              private clientResourceService: ClientResourceService,
              private itemsResourceService: ItemsResourceService) {
  }

  loadInvoice(invoiceId: string): void {

  }

  loadSupplier(): void {

  }

  loadClients(searchString: string): void {
    this.clientResourceService.loadCompanies(searchString)
      .subscribe((clients: ApiResponse<Company>) => {
        this.invoiceEditState.setClients(clients.data);
      });
  }

  loadLineItems(searchString: string): void {
    this.itemsResourceService.loadLineItems(searchString)
      .subscribe((lineItems: ApiResponse<LineItem>) => {
        this.invoiceEditState.setLineItems(lineItems.data);
      });
  }

  saveClient(client: Company): void {

  }

  saveInvoice(invoice: Invoice): void {

  }

  isNew$() {
    return this.invoiceEditState.getState$()
      .pipe(map((state: InvoiceEditStateObject) => state.isNew));
  }

  getInvoice$() {
    return this.invoiceEditState.getState$()
      .pipe(map((state: InvoiceEditStateObject) => state.invoice));
  }


  getSupplier$(): Observable<Company> {
    return this.invoiceEditState.getState$()
      .pipe(map((state: InvoiceEditStateObject) => state.supplier));
  }

  getClients$(): Observable<Company[]> {
    return this.invoiceEditState.getState$()
      .pipe(map((state: InvoiceEditStateObject) => state.clients));
  }

  getLineItems$(): Observable<LineItem[]> {
    return this.invoiceEditState.getState$()
      .pipe(map((state: InvoiceEditStateObject) => state.lineItems));
  }


}
