import { Company } from '@invoices/api-interfaces';
export interface PagingOptions {
  pageSize?: number;
  pageIndex?: number;
  length?: number;
  pageSizeOptions?: number[];
}

export enum ViewType {
  LIST = 'list',
  TABLE = 'table',
}

export enum ClientListActions {
  LOAD_COMPANIES = 'LOAD_COMPANIES',
  LOAD_PAGE = 'LOAD_PAGE',
}


export interface ClientListState {
  clients: Company[];
  rowCount: number;
  paging: PagingOptions,
  currentFilter: string;
}
