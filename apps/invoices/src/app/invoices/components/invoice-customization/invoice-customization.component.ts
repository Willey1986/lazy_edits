import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'invoices-unit-measurement',
  templateUrl: './invoice-customization.component.html',
  styles: []
})
export class InvoiceCustomizationComponent implements OnInit {
  @Input() unitMeasurements: string[];
  @Input() currencies: string[];

  @Input() invoiceCustomizationFormGroup: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
  }

}
