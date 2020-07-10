import { Component, Input, OnInit } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'invoices-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

  @Input() clients$: Observable<Company[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
