import { Client } from '../../modele/client';
import { Compte } from '../../modele/compte';
import { ClientService } from '../../service/client.service';
import { CompteService } from '../../service/compte.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['./client-accueil.component.css'],
  providers:[CompteService, ClientService]
})
export class ClientAccueilComponent implements OnInit {
  private comptes: Compte[];
  private client: Client;
  curIdCl: number;
  constructor(private router: Router, private compteService: CompteService,
  private clientService: ClientService) { }

  ngOnInit() {
    this.curIdCl = parseInt(localStorage.getItem('idCl'));
    if(this.curIdCl){
      this.getCli(this.curIdCl);
      this.getAllCompte(this.curIdCl);
    }
  }
  
  getCli(curIdCl) {
    this.clientService.findById(this.curIdCl).subscribe(
      client => {
        this.client=client;
      },
      err=> {
        console.log(err);
      }
    );
  }
  
  getAllCompte(curIdCl){
    this.compteService.findCompteClient(this.curIdCl).subscribe(
      comptes => {
        this.comptes=comptes;
      },
      err=> {
        console.log(err);
      }
    );
  }
  
  redirectListClient(){}
  
  historique(compte: Compte){}
  
  AccueilPage() {
    this.router.navigate(['']);
  }
  
  
}
