import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {AdministratorModule} from './administrator/administrator.module';
import {ConseillerModule} from './conseiller/conseiller.module';
import { LoginModule } from './login/login.module';
import {HttpModule} from '@angular/http';
import { ModeleComponent } from './modele/modele.component';
import { ServiceComponent } from './service/service.component';
import { VisitorModule } from './visitor/visitor.module';


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
    ConseillerModule,
    LoginModule,
    VisitorModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
