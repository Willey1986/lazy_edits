import { Injectable } from '@angular/core';
import { ClientResourceService } from './client-resource.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientListActions, ClientListState, ViewType } from '../types';
import { initialPagingOptions } from '../types/constants';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class ClientListService {
  state$: Observable<ClientListState>;
  stateSubject: BehaviorSubject<ClientListState> = new BehaviorSubject({
    clients: [],
    currentFilter: '',
    rowCount: 0,
    paging: initialPagingOptions,
    viewType: ViewType.LIST,
  });

  constructor(private clientResource: ClientResourceService) {
    this.state$ = this.stateSubject.asObservable();
  }

  dispatch(action: ClientListActions, payload?: unknown) {
    console.log(action, payload);
    switch (action) {
      case ClientListActions.LOAD_COMPANIES:
        this.loadCompanies(payload as string);
        break;
      case ClientListActions.LOAD_PAGE:
        this.loadPage(payload as PageEvent);
        break;
      default:
        break;

    }
  }

  private loadCompanies(companyFilter?: string) {
    console.log('Filter:', companyFilter);
    const oldState = this.stateSubject.getValue();
    const { paging, currentFilter } = oldState;
    const filter = companyFilter || oldState.currentFilter;
    const { pageSize } = paging;
    const pageIndex = companyFilter ? 1 : paging.pageIndex + 1;
    console.log('Page:', pageIndex);
    this.clientResource.loadCompanies(companyFilter, pageIndex, pageSize)
      .subscribe(response => {
        console.log('data', {
          clients: response.data,
          rowCount: response.count,
          paging,
          currentFilter: filter
        });
        this.stateSubject.next({
          clients: response.data,
          rowCount: response.count,
          paging,
          currentFilter: filter,
        });
      });
  }

  private loadPage(paging: PageEvent) {
    console.log('Page:', paging, paging.pageIndex, paging.pageSize);
    const oldState = this.stateSubject.getValue();
    const { currentFilter } = oldState;
    this.clientResource.loadCompanies(currentFilter, paging.pageIndex, paging.pageSize)
      .subscribe(response => {
        this.stateSubject.next({
          clients: response.data,
          rowCount: response.count,
          paging,
          currentFilter,
        })
      });
  }
}
