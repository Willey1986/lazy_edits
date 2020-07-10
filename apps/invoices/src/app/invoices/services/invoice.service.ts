import {Injectable} from '@angular/core';
import {InvoiceEditState, InvoiceEditStateObject} from "../states/InvoiceEditState";
import {map, take} from "rxjs/operators";
import {ApiResponse, Company, Invoice, LineItem} from "@invoices/api-interfaces";
import {Observable} from "rxjs";
import {ClientResourceService} from "../../clients/services/client-resource.service";
import {ItemsResourceService} from "../../items/services/items-resource.service";
import {InvoiceResourceService} from "./invoice-resource.service";
import {Router} from "@angular/router";

@Injectable()
export class InvoiceService {

  constructor(private invoiceEditState: InvoiceEditState,
              private clientResourceService: ClientResourceService,
              private itemsResourceService: ItemsResourceService,
              private invoiceResourceService: InvoiceResourceService,
              private router: Router) {
  }

  loadInvoice(invoiceId: string): void {
    this.invoiceResourceService.loadInvoice(invoiceId)
      .subscribe((invoice: Invoice) => {
        this.invoiceEditState.setInvoice(invoice);
      });
  }

  loadSupplier(): void {
    this.clientResourceService.loadCompanies()
      .pipe(
        map((clients: ApiResponse<Company>) => {
          if (clients != null && clients.data != null && clients.data.length > 0) {
            return clients.data[0];
          } else {
            return null;
          }
        })
      )
      .subscribe((supplier: Company) => {
        this.invoiceEditState.setSupplier(supplier);
      });
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
    console.log("Tried to store client: " + JSON.stringify(client));
    const newClient = Object.assign({}, client, {id: this.createUuidv4()});
    this.invoiceEditState.getState$()
      .pipe(
        take(1),
        map((state: InvoiceEditStateObject) =>
          Object.assign({}, state.invoice, newClient)
        ),
      )
      .subscribe((invoice: Invoice) => {
        this.invoiceEditState.setInvoice(invoice);
      });
  }

  private createUuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = (c == 'x') ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  saveInvoice(invoice: Invoice): void {
    this.invoiceResourceService.saveInvoice(invoice)
      .subscribe((storedInvoice: Invoice) => {
        this.invoiceEditState.setInvoice(storedInvoice);
        this.router.navigateByUrl(`invoices/${storedInvoice.id}/edit`);
      });
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
