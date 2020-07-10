import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { PageEvent } from '@angular/material/paginator';
import { PagingOptions } from '../../types';
import { initialPagingOptions } from '../../types/constants';

@Component({
  selector: 'invoices-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Input() companies: Company[];
  @Input() paging: PagingOptions = initialPagingOptions;
  @Input() rowCount = 0;

  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];

  @Output() page: EventEmitter<PageEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reloadCompanies(ev: PageEvent) {
    this.page.emit(ev);
  }
}
