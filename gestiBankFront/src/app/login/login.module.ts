import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginDetailComponent } from './login-detail/login-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
        FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginDetailComponent]
})
export class LoginModule { }
