import {Component} from '@angular/core';
import {InvoiceService} from "../../services/invoice.service";
import {ActivatedRoute, Params} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Company, Invoice, LineItem} from "@invoices/api-interfaces";
import {InvoiceEditState} from "../../states/InvoiceEditState";

@Component({
  selector: 'invoices-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css'],
  providers: [InvoiceService, InvoiceEditState]
})
export class EditInvoiceComponent {

  invoice$: Observable<Invoice>;
  isNew$: Observable<boolean>;

  supplier$: Observable<Company>;
  clients$: Observable<Company[]>;
  lineItems$: Observable<LineItem[]>;

  constructor(private invoiceService: InvoiceService,
              private route: ActivatedRoute) {

    route.params
      .pipe(
        map((params: Params) => params.invoiceId),
      )
      .subscribe((id: string) =>
        this.invoiceService.loadInvoice(id)
      );

    this.invoiceService.loadSupplier();

    this.isNew$ = invoiceService.isNew$();
    this.invoice$ = invoiceService.getInvoice$();
    this.supplier$ = invoiceService.getSupplier$();
    this.clients$ = invoiceService.getClients$();
    this.lineItems$ = invoiceService.getLineItems$();
  }

  public onClientSearch(clientName: string): void {
    this.invoiceService.loadClients(clientName);
  }

  public onLineItemSearch(productName: string): void {
    this.invoiceService.loadLineItems(productName);
  }

}
