import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '@invoices/api-interfaces';
import { PagingOptions } from '../../types';
import { initialPagingOptions } from '../../types/constants';
import { PageEvent } from '@angular/material/paginator';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'invoices-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
  @Input() companies: Company[];
  @Input() paging: PagingOptions = initialPagingOptions;
  @Input() rowCount = 0;
  @Output() page = new EventEmitter<PageEvent>();
  columnDefs: ColDef[] = [
    {
      headerName: 'Client',
      field: 'companyName'
    },
    {
      headerName: 'City',
      field: 'city'
    },
    {
      headerName: 'Number of vehicles',
      valueGetter: (params) => params.data.cars.length,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
