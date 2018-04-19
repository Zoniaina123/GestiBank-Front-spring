import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorListComponent} from './administrator-list/administrator-list.component';
import {AdministratorDetailComponent} from './administrator-detail/administrator-detail.component';
import {ConseillerDetailComponent} from '../conseiller/conseiller-detail/conseiller-detail.component';
import { AdministratorAccueilComponent } from './administrator-accueil/administrator-accueil.component';


const routes: Routes = [
  {path: 'administrator', component : AdministratorListComponent},
{path: 'administrator/accueil', component : AdministratorAccueilComponent},
  {path: 'administrator/create', component : AdministratorDetailComponent},
  {path: 'administrator/conseiller/create/:id', component : ConseillerDetailComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }


