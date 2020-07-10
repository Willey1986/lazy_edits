import {Injectable} from "@angular/core";
import {Company, Invoice, LineItem} from "@invoices/api-interfaces";
import {BehaviorSubject, Observable} from "rxjs";

export interface InvoiceEditStateObject {
  isNew: boolean;
  invoice: Invoice;
  supplier: Company,
  clients: Company[];
  lineItems: LineItem[];
}

@Injectable()
export class InvoiceEditState {

  private state$: BehaviorSubject<InvoiceEditStateObject> = new BehaviorSubject<InvoiceEditStateObject>(
    {
      isNew: false,
      invoice: null,
      supplier: null,
      clients: [],
      lineItems: []
    });

  public getState$(): Observable<InvoiceEditStateObject> {
    return this.state$.asObservable();
  }

  public setInvoice(invoice: Invoice): void {
    this.state$.next(Object.assign({}, this.state$.getValue(), {
      invoice: invoice,
      isNew: invoice == null || invoice.id == null
    }));
  }

  public setSupplier(supplier: Company): void {
    this.state$.next(Object.assign({}, this.state$.getValue(), {
      supplier: supplier
    }));
  }

  public setClients(clients: Company[]): void {
    this.state$.next(Object.assign({}, this.state$.getValue(), {
      clients: clients
    }));
  }

  public setLineItems(lineItems: LineItem[]): void {
    this.state$.next(Object.assign({}, this.state$.getValue(), {
      lineItems: lineItems
    }));
  }

}
