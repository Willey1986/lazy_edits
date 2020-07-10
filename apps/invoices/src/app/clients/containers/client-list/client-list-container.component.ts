import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '@invoices/api-interfaces';
import { ClientListService } from '../../services/client-list.service';
import { ClientListActions, ClientListState, ViewType } from '../../types';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'invoices-client-list-container',
  templateUrl: './client-list-container.component.html',
  styleUrls: ['./client-list-container.component.css'],
})
export class ClientListContainerComponent implements OnInit {
  state$: Observable<ClientListState>;
  companies: Company[] = [];
  companyName = '';

  rowCount = 0;
  viewType = ViewType.LIST;

  constructor(private service: ClientListService) {}

  ngOnInit(): void {
    this.state$ = this.service.state$;
    this.service.dispatch(ClientListActions.LOAD_COMPANIES);
  }

  reloadCompanies(page: PageEvent) {
    this.service.dispatch(ClientListActions.LOAD_PAGE, page);
  }

  filterCompanies(searchTerm: string) {
    this.service.dispatch(ClientListActions.LOAD_COMPANIES, searchTerm);
  }

  changeViewType(viewType: ViewType) {
    this.viewType = viewType;
  }
}
