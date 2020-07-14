import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Company, Invoice, LineItem } from '@invoices/api-interfaces';
import { InvoiceEditState } from '../../states/InvoiceEditState';
import { InvoiceParameters } from '../../model/invoice-parameters';

@Component({
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
  invoiceParameters: InvoiceParameters;

  constructor(private invoiceService: InvoiceService,
              private route: ActivatedRoute) {

    route.params
      .pipe(
        map((params: Params) => params.invoiceId),
        filter((id: string) => id != null)
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
    this.invoiceParameters = invoiceService.getInvoiceParameters();
  }

  public onClientSearch(clientName: string): void {
    this.invoiceService.loadClients(clientName);
  }

  public onLineItemSearch(productName: string): void {
    this.invoiceService.loadLineItems(productName);
  }

  public onStoreInvoice(invoice: Invoice): void {
    this.invoiceService.saveInvoice(invoice);
  }

  public onStoreClient(client: Company): void {
    this.invoiceService.saveClient(client);
  }

}
