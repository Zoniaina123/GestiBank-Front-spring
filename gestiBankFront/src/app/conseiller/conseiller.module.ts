import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConseillerRoutingModule } from './conseiller-routing.module';
import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerDetailComponent } from './conseiller-detail/conseiller-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule
  ],
  declarations: [ConseillerListComponent, ConseillerDetailComponent]
})
export class ConseillerModule { }
