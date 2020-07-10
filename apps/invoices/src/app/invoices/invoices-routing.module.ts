import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './containers/invoice-list/invoice-list.component';
import { InvoiceComponent } from './containers/invoice/invoice.component';
import { EditInvoiceComponent } from './containers/edit-invoice/edit-invoice.component';


const routes: Routes = [
  { path: '', component: InvoiceListComponent },
  { path: 'new', component: EditInvoiceComponent },
  { path: ':invoiceId/edit', component: EditInvoiceComponent },
  { path: ':invoiceId', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
