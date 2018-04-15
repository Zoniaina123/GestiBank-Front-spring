import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorListComponent} from './administrator-list/administrator-list.component';
import {AdministratorDetailComponent} from './administrator-detail/administrator-detail.component';


const routes: Routes = [
  {path: 'administrator', component : AdministratorListComponent},
  {path: 'administrator/create', component : AdministratorDetailComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }


