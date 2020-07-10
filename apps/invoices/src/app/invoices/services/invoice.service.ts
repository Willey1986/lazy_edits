import {Injectable} from '@angular/core';
import {InvoiceEditState, InvoiceEditStateObject} from "../states/InvoiceEditState";
import {map} from "rxjs/operators";
import {Company, LineItem} from "@invoices/api-interfaces";
import {Observable} from "rxjs";

@Injectable()
export class InvoiceService {

  constructor(private invoiceEditState: InvoiceEditState) {
  }

  loadInvoice(invoiceId: string): void {

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
