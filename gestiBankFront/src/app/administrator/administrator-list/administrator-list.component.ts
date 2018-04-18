import { AdministratorService } from '../../service/administrator.service';
import { Component, OnInit } from '@angular/core';
import {Administrator} from '../../modele/administrator';
import { Router } from '@angular/router';
import { log } from 'util';


@Component({
  selector: 'app-administrator-list',
  templateUrl: './administrator-list.component.html',
  styleUrls: ['./administrator-list.component.css'],
  providers:[AdministratorService]
})
export class AdministratorListComponent implements OnInit {
private administrators: Administrator[];
private administrator: Administrator;

  curId: number;
  constructor(private router: Router, private administratorService: AdministratorService) { }

  ngOnInit() {
    this.curId = parseInt(localStorage.getItem('id'));
    console.log(this.curId);
    this.getAllAdmins();
  }

  getAllAdmins() {
    this.administratorService.findAllAdministrators().subscribe(
      administrators => {
        this.administrators=administrators;
      },
      err=> {
        console.log(err);
      }
    );
  }

  redirectNewAdminPage() {
    this.router.navigate(['administrator/create']);
  }

//  editUserPage(admin: Admin){
//    if (user) {
//      this.router.navigate(['/admin/edit',user.id]);
//
//    }
//  }
  
  editConsPage(administrator: Administrator) {
    if (administrator) {
    this.router.navigate(['administrator/conseiller/create',this.curId]);
  }
  }

  deleteAdmin(administrator: Administrator) {
    if (administrator) {
      this.administratorService.deleteAdministrator(administrator.id).subscribe(
        res=> {
          this.getAllAdmins();
          this.router.navigate(['administrator/']);
          console.log('done');
        }
        );
    }
  }
}
