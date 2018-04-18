import { AdministratorService } from '../../service/administrator.service';
import { Component, OnInit } from '@angular/core';
import {Administrator} from '../../modele/administrator';
import { Conseiller } from '../../modele/conseiller';
import { Visitor } from '../../modele/visitor';
import { Client } from '../../modele/client';
import { ClientService } from '../../service/client.service';
import { ConseillerService } from '../../service/conseiller.service';
import { VisitorService } from '../../service/visitor.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-conseiller-accueil',
  templateUrl: './conseiller-accueil.component.html',
  styleUrls: ['./conseiller-accueil.component.css'],
  providers:[ConseillerService, VisitorService, ClientService]
})
export class ConseillerAccueilComponent implements OnInit {
private conseiller: Conseiller;
private visitors: Visitor[];
private clientsVirtuel: Client[];
  7
  curIdC: number;
  constructor(private router: Router, private conseillerService: ConseillerService,private visitorService: VisitorService,
  private clientService: ClientService) { }

  ngOnInit() {
    this.curIdC = parseInt(localStorage.getItem('idC'));
    console.log(this.curIdC);
    if(this.curIdC){
      this.getCons(this.curIdC);
      this.clientsVirtuel=[];
      this.getAllAffected(this.curIdC);
      
    }

  }

  getCons(curIdC) {
    this.conseillerService.findById(this.curIdC).subscribe(
      conseiller => {
        this.conseiller=conseiller;
      },
      err=> {
        console.log(err);
      }
    );
  }
  
  getAllAffected(curIdC){
    this.clientsVirtuel=[];
    this.visitorService.findAllAffectedVisitor(this.curIdC).subscribe(
      visitors => {
        this.visitors=visitors;
        for (let i = 0; i < visitors.length; i++) {
          let visitor = visitors[i];
          this.clientsVirtuel.push(new Client(visitor.id,
                               visitor.prenom,
                               visitor.email,
                               '',
                               '',
                                visitor.address,
                                visitor.numTel,
                              null,
                              '', 0, '',
                              null,
                              null))
        }
      },
      err=> {
        console.log(err);
      }
    );
  }
  
  
  redirectListClient() {
    this.router.navigate(['conseiller/client']);
  }

  
  editConsPage(administrator: Administrator) {
    if (administrator) {
    this.router.navigate(['administrator/conseiller/create',this.curIdC]);
  }
  }

  createClient(c: Client){
    let newClient=new Client(null,
                               c.prenom,
                               c.email,
                               c.username,
                               c.pwd,
                                c.address,
                                c.numTel,
                                null,
                                c.nom, c.nbEnfant, c.situation,
                                null,null);
    this.clientService.saveClient(this.curIdC,c.id,newClient).subscribe(value=>{this.getAllAffected(this.curIdC)});

  
  }
  

}