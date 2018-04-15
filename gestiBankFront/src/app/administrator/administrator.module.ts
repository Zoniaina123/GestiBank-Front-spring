import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorDetailComponent } from './administrator-detail/administrator-detail.component';
import { AdministratorListComponent } from './administrator-list/administrator-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdministratorDetailComponent, AdministratorListComponent]
})
export class AdministratorModule { }
