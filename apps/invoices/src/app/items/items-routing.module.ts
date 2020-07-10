import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemComponent } from './containers/item/item.component';


const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: ':itemId', component: ItemComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
