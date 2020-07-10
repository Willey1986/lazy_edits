import {Injectable} from "@angular/core";
import {Invoice} from "@invoices/api-interfaces";
import {BehaviorSubject} from "rxjs";

export interface InvoiceEditStateObject {
  isNew: boolean;
  invoice: Invoice;
}

@Injectable()
export class InvoiceEditState {

  private state$: BehaviorSubject<InvoiceEditStateObject> = new BehaviorSubject<InvoiceEditStateObject>(
    {
      isNew: false,
      invoice: null
    });

}
