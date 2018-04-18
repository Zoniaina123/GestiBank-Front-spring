import { AdministratorService } from '../../service/administrator.service';
import { Component, OnInit } from '@angular/core';
import {Administrator} from '../../modele/administrator';
import { Conseiller } from '../../modele/conseiller';
import { Visitor } from '../../modele/visitor';
import { ConseillerService } from '../../service/conseiller.service';
import { VisitorService } from '../../service/visitor.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-administrator-accueil',
  templateUrl: './administrator-accueil.component.html',
  styleUrls: ['./administrator-accueil.component.css'],
  providers:[AdministratorService,VisitorService, ConseillerService]
})
export class AdministratorAccueilComponent implements OnInit {
private administrator: Administrator;
private visitors: Visitor[];
  private conseillers: Conseiller[];

  curId: number;
  constructor(private router: Router, private administratorService: AdministratorService, private visitorService: VisitorService,
              private conseillerService: ConseillerService) { }

  ngOnInit() {

    this.curId = parseInt(localStorage.getItem('id'));
    console.log(this.curId);
    this.getAdmins(this.curId);
    this.getAllVisitor();
    this.getAllConseiller();
    
  }

  getAdmins(curId) {
    this.administratorService.findById(this.curId).subscribe(
      administrator => {
        this.administrator=administrator;
      },
      err=> {
        console.log(err);
      }
    );
  }
  
  getAllVisitor(){
    this.visitorService.findAllVisitors().subscribe(
      visitors => {
        this.visitors=visitors;
      },
      err=> {
        console.log(err);
      }
    );
  }
  
  getAllConseiller(){
    this.conseillerService.findAllConseillers().subscribe(
      conseillers => {this.conseillers=conseillers;},
      err=> {console.log(err);}
    );
  }
  

  redirectListConseiller() {
    this.router.navigate(['administrator/conseiller']);
  }

  
//  editConsPage(administrator: Administrator) {
//    if (administrator) {
//    this.router.navigate(['administrator/conseiller/create',this.curId]);
//  }
//  }

  affectVisitor(visitor: Visitor){
    this.visitorService.updateVisitor(visitor.id, visitor).subscribe(
      visitor => {},
      err=> {console.log(err);}
    );
  }
  
}