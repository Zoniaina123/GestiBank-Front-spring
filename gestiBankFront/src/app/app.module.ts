import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {AdministratorModule} from './administrator/administrator.module';
import {HttpModule} from '@angular/http';
import { ModeleComponent } from './modele/modele.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    ModeleComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministratorModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
