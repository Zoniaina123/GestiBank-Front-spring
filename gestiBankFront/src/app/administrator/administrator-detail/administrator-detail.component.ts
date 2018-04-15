import { Component, OnInit } from '@angular/core';
import {AdministratorService} from '../../service/administrator.service';
import {Administrator} from '../../modele/administrator';
import {ActivatedRoute, Router} from '@angular/router';
import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-administrator-detail',
  templateUrl: './administrator-detail.component.html',
  styleUrls: ['./administrator-detail.component.css'],
  providers:[AdministratorService]
})
export class AdministratorDetailComponent implements OnInit, OnDestroy {

  id:number;
  administrator:Administrator;

  adminForm:FormGroup;

  private sub: any;

  constructor(private route:ActivatedRoute, private router: Router, private administratorService: AdministratorService) { }

  ngOnInit() {

    // create User
    this.adminForm = new FormGroup({
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      username: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      numTel: new FormControl('', Validators.required)
    });


  }

  ngOnDestroy(): void { }


  onSubmit() {
    if (this.adminForm.valid) {
   // create admin
    let administrator: Administrator = new Administrator(null,
                              this.adminForm.controls['prenom'].value,
                              this.adminForm.controls['email'].value,
                              this.adminForm.controls['username'].value,
                              this.adminForm.controls['pwd'].value,
                              this.adminForm.controls['address'].value,
                              this.adminForm.controls['numTel'].value,
                              null);
    this.administratorService.saveAdministrator(administrator).subscribe(value=>this.redirectAdminPage());

  }



    this.adminForm.reset();
    // this.router.navigate(['/administrators']);
  }
  redirectAdminPage() {
    this.router.navigate(['/administrator']);
  }
}
