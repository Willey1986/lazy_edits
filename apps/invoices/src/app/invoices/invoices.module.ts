import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceListComponent } from './containers/invoice-list/invoice-list.component';
import { InvoiceComponent } from './containers/invoice/invoice.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAmountPipe } from './util/get-amount.pipe';
import { InvoiceListService } from './services/invoice-list.service';
import { InvoiceService } from './services/invoice.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { EditInvoiceComponent } from './containers/edit-invoice/edit-invoice.component';
import { ClientComponent } from './components/client.component';
import { InvoiceHeaderComponent } from './components/invoice-header/invoice-header.component';
import { MatDatepicker } from '@angular/material/datepicker';

@NgModule({
  declarations: [InvoiceListComponent, InvoiceComponent, GetAmountPipe, EditInvoiceComponent, ClientComponent, InvoiceHeaderComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatListModule,
    MatDatepicker
  ],
  providers: [InvoiceListService, InvoiceService]
})
export class InvoicesModule { }
