import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'invoices-invoice-header',
  templateUrl: './invoice-header.component.html',
  styles: [
  ]
})
export class InvoiceHeaderComponent implements OnInit {
  @Input() invoiceDateFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
