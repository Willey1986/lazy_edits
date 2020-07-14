import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InvoiceParameters } from '../../model/invoice-parameters';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'invoices-edit-parameters',
  templateUrl: './edit-parameters.component.html',
  styleUrls: ['./edit-parameters.component.scss']
})
export class EditParametersComponent implements OnInit {
  @Input() parametersForm: FormGroup;
  @Input() invoiceParameters: InvoiceParameters;

  @Output() unitMeasurementChange = new EventEmitter();
  @Output() currencyChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  selectUnitMeasurement(unitMeasurement: string, $event: MatOptionSelectionChange){
    if ($event.isUserInput) {
      this.unitMeasurementChange.emit(unitMeasurement);
    }
  }

  selectCurrency(currency: string, $event: MatOptionSelectionChange){
    if ($event.isUserInput) {
      this.currencyChange.emit(currency);
    }
  }
}
