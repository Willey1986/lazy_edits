import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemComponent } from './containers/item/item.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GetAmountPipe } from './util/get-amount.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ItemService } from './services/item.service';
import { ItemListService } from './services/item-list.service';

@NgModule({
  declarations: [ItemListComponent, ItemComponent, GetAmountPipe],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [ItemService, ItemListService],
})
export class ItemsModule { }
