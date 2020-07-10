import { Component, Input, OnInit } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'invoices-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  @Input() clients$: Observable<Company[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
