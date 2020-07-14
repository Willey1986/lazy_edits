import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company, Invoice } from '@invoices/api-interfaces';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { dateValidator } from './validators/date-validator';
import { dueDateValidator } from './validators/due-date-validator';
import { InvoiceParameters } from '../../model/invoice-parameters';

@Component({
  selector: 'invoices-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {
  @Input() clients$: Observable<Company[]>;
  @Input() invoice: Invoice;
  @Input() invoiceParameters: InvoiceParameters;
  @Output() searchClients = new EventEmitter<string>();
  @Output() changeUnitMeasurement = new EventEmitter<string>();
  @Output() changeCurrency = new EventEmitter<string>();
  @Output() createInvoice = new EventEmitter();

  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
        header: new FormGroup({
          date: new FormControl(new Date(), [dateValidator]),
          dueDate: new FormControl('')
        }, [dueDateValidator]),
        client: new FormGroup({
          companyName: new FormControl(''),
          vatNo: new FormControl('')
        }),
        parameters: new FormGroup({
          unitMeasurement: new FormControl(''),
          currency: new FormControl('')
        }),
        products: this.fb.array([])
      }
    );
  }

  search(input: string) {
    this.searchClients.emit(input);
  }

  onCurrencyChanged(currency: string) {
    this.changeCurrency.emit(currency);
  }

  onUnitMeasurementChange(unit: string) {
    this.changeCurrency.emit(unit);
  }

  onInvoiceCreate() {
    console.log(this.invoiceForm.value);
    this.createInvoice.emit(this.invoiceForm.value)
  }

}
