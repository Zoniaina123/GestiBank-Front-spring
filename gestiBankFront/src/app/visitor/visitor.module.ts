import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorDetailComponent } from './visitor-detail/visitor-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VisitorListComponent, VisitorDetailComponent]
})
export class VisitorModule { }


