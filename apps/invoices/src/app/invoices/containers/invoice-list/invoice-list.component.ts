import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Invoice } from '@invoices/api-interfaces';
import { InvoiceListService } from '../../services/invoice-list.service';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'invoices-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  search = new FormControl('', [Validators.required]);
  pageIndex = 0;
  pageSize = 5;

  pageSizeOptions = [3, 5, 10];

  constructor(private service: InvoiceListService) { }

  ngOnInit(): void {
    this.loadInvoices('Eidel', this.pageIndex + 1, this.pageSize);
    this.search.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.pageIndex = 0),
      )
      .subscribe(value => this.loadInvoices(value, this.pageIndex + 1, this.pageSize));
  }

  reloadInvoices({ pageIndex, pageSize} : { pageIndex: number, pageSize: number }) {
    this.loadInvoices(this.search.value, pageIndex, pageSize);

  }

  private loadInvoices(companyName, page, perPage) {
    this.service.loadInvoices(companyName, page + 1, perPage)
      .pipe(
        // update paging
        tap(() => {
          this.pageIndex = page;
          this.pageSize = perPage;
        })
      )
      .subscribe(invoices => {
        console.log(invoices, 'loaded');

        this.invoices = invoices;
      });
  }
}
