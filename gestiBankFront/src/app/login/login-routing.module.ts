import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginDetailComponent} from './login-detail/login-detail.component';

const routes: Routes = [
{path: 'login', component : LoginDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
