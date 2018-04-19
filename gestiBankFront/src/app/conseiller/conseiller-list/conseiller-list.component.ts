import { ConseillerService } from '../../service/conseiller.service';
import { Component, OnInit } from '@angular/core';
import {Conseiller} from '../../modele/conseiller';
import {Administrator} from '../../modele/administrator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseiller-list',
  templateUrl: './conseiller-list.component.html',
  styleUrls: ['./conseiller-list.component.css'],
  providers:[ConseillerService]
})
export class ConseillerListComponent implements OnInit {
private conseillers: Conseiller[];

  curId: number;
  
  constructor(private router: Router, private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.curId = parseInt(localStorage.getItem('id'));
    this.getAllCons();
  }

  getAllCons() {
    this.conseillerService.findAllConseillers().subscribe(
      conseillers => {
        this.conseillers=conseillers;

      },
      err=> {
        console.log(err);
      }
    );
  }


  
  editConsPage() {
    this.router.navigate(['administrator/conseiller/create',this.curId]);
  }

//  editUserPage(admin: Admin){
//    if (user) {
//      this.router.navigate(['/admin/edit',user.id]);
//
//    }
//  }

  deleteCons(conseiller: Conseiller) {
    if (conseiller) {
      this.conseillerService.deleteConseillerById(conseiller.id).subscribe(
        res=> {
          this.getAllCons();
          this.router.navigate(['administrator/conseiller/']);
          console.log('done');
        }
        );
    }
  }
}
