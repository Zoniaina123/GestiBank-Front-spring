import { Auth } from '../../modele/auth';
import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.css'],
  providers:[LoginService]
})
export class LoginDetailComponent implements OnInit {

  userForm:FormGroup;
  auth: Auth;

  
  constructor(private route:ActivatedRoute, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
      this.userForm = new FormGroup({
      user: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required)
    });
  }
  
 onSubmit() {
  if (this.userForm.valid) {
   // create admin
    let auth: Auth = new Auth(this.userForm.controls['user'].value,
                              this.userForm.controls['pwd'].value
                             );
    console.log(auth);
    this.loginService.isValidUser(auth).subscribe(currentUser => {
      console.log('***********');
      console.log(currentUser);
      console.log(currentUser.role);
      if (currentUser.role=='ADMIN'){
        let id = currentUser.id
        localStorage.setItem('id', id+'');
        this.router.navigate(['administrator/accueil']);
      }
      
      if(currentUser.role=='CONSEILLER'){
        let idC = currentUser.id
        localStorage.setItem('idC', idC+'');
        this.router.navigate(['conseiller/accueil']);
      }
      
      if(currentUser.role=='CLIENT'){
        let idCl = currentUser.id
        localStorage.setItem('idCl', idCl+'');
        this.router.navigate(['client/accueil']);
      }
      
    });
 
   }
  }

  redirectUserPage(){}
  
}
