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

  @Output() changeUnitMeasurement = new EventEmitter();
  @Output() changeCurrency = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  onUnitMeasurementChange(unitMeasurement: string, $event: MatOptionSelectionChange) {
    if ($event.isUserInput) {
      this.changeUnitMeasurement.emit(unitMeasurement);
    }
  }

  onCurrencyChange(currency: string, $event: MatOptionSelectionChange) {
    if ($event.isUserInput) {
      this.changeCurrency.emit(currency);
    }
  }
}
