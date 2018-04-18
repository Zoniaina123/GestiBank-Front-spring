import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConseillerListComponent} from './conseiller-list/conseiller-list.component';
import { ConseillerDetailComponent} from './conseiller-detail/conseiller-detail.component';

const routes: Routes = [
  {path: 'administrator/conseiller', component : ConseillerListComponent},
{path: 'conseiller/accueil', component : ConseillerAccueilComponent},
  {path: 'administrator/conseiller/create/:id', component : ConseillerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillerRoutingModule { }
