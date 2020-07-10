import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListContainerComponent } from './containers/client-list/client-list-container.component';
import { ClientContainerComponent } from './containers/client/client-container.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListContainerComponent,
  },
  {
    path: ':clientId',
    component: ClientContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
