import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorDetailComponent } from './administrator-detail/administrator-detail.component';
import { AdministratorListComponent } from './administrator-list/administrator-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministratorAccueilComponent } from './administrator-accueil/administrator-accueil.component';

@NgModule({
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdministratorDetailComponent, AdministratorListComponent, AdministratorAccueilComponent]
})
export class AdministratorModule { }
