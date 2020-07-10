import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '@invoices/api-interfaces';

@Component({
  selector: 'invoices-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  @Input() client: Company;
  @Output() clientChange = new EventEmitter<Company>();

  constructor() { }

  ngOnInit(): void {
  }

}
