import { Component, Input, OnInit } from '@angular/core';
import { Company } from '@invoices/api-interfaces';

@Component({
  selector: 'invoices-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  @Input() company: Company;

  constructor() { }

  ngOnInit(): void {
  }

}
