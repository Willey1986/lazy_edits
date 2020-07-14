import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Invoice } from '@invoices/api-interfaces';

@Component({
  selector: 'invoices-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {
  @Input() headerForm: FormGroup;

  @Input() invoice: Invoice;

  constructor() { }

  ngOnInit(): void {
  }

}
