import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'invoices-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

  @Input() clients$: Observable<Company[]>;
  @Output() searchClients = new EventEmitter<string>();

  invoiceForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.invoiceForm = new FormGroup({
         client: new FormGroup({
           companyName: new FormControl(''),
           vatNo: new FormControl('')
         })
      }
    )
  }

  search(input: string){
    this.searchClients.emit(input);
  }

  getClientForm(){
   return this.invoiceForm.get('client') as FormGroup;
  }

}
