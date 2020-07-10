import { Component, OnInit } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'invoices-client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.css']
})
export class ClientContainerComponent implements OnInit {
  company: Company;
  editMode = false;
  constructor(private service: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.clientId)
      )
      .subscribe(clientId => this.loadClient(clientId))
  }

  editCompany() {
    this.editMode = true;
  }

  close() {
    this.editMode = false;
  }

  private loadClient(clientId: string) {
    this.service.loadCompany(clientId)
      .subscribe(company => this.company = company);
  }
}
