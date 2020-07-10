import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invoices-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  companies: any = [{
    name: 'Special company'
    }, {
    name: 'Awesome company'
    }, {
      name: 'Cool company'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
