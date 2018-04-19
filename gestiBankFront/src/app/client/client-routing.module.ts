import { ClientAccueilComponent } from './client-accueil/client-accueil.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'client/accueil', component : ClientAccueilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
