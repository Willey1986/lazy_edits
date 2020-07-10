import {Component, OnInit} from '@angular/core';
import {Invoice} from '@invoices/api-interfaces';
import {InvoiceService} from '../../services/invoice.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'invoices-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice;

  constructor(private service: InvoiceService, private route: ActivatedRoute) {
    this.service.getInvoice$().subscribe((invoice: Invoice) => {
      this.invoice = invoice;
    });
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.invoiceId)
      )
      .subscribe(invoiceId =>
        this.service.loadInvoice(invoiceId)
      )
  }

}
