import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'invoices-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  @Input() clients$: Observable<Company[]>;
  @Input() clientForm: FormGroup;
  @Output() search = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit(): void {
    this.clientForm.get('companyName').valueChanges.subscribe(value =>{
      this.search.emit(value);
      }
    )
  }

}
