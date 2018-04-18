import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConseillerRoutingModule } from './conseiller-routing.module';
import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerDetailComponent } from './conseiller-detail/conseiller-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';;

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ConseillerListComponent, ConseillerDetailComponent, ConseillerAccueilComponent]
})
export class ConseillerModule { }
