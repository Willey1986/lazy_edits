import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListContainerComponent } from './containers/client-list/client-list-container.component';
import { ClientContainerComponent } from './containers/client/client-container.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientListService } from './services/client-list.service';
import { ClientService } from './services/client.service';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AgGridModule } from 'ag-grid-angular';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

@NgModule({
  declarations: [
    ClientListContainerComponent,
    ClientContainerComponent,
    ClientTableComponent,
    ClientListComponent,
    ToolbarComponent,
    ClientViewComponent,
    ClientEditComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    AgGridModule,
    MatButtonModule
  ],
  providers: [ClientListService, ClientService]
})
export class ClientsModule { }
