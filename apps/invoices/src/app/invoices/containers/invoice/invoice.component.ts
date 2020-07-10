import { Component, OnInit } from '@angular/core';
import { Invoice } from '@invoices/api-interfaces';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'invoices-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice;

  constructor(private service: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.invoiceId)
      )
      .subscribe(invoiceId => this.loadClient(invoiceId))
  }

  private loadClient(invoiceId: string) {
    this.service.loadInvoice(invoiceId)
      .subscribe(invoice => this.invoice = invoice);
  }

}
