import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../modele/user';
import {ActivatedRoute, Router} from '@angular/router';
import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers:[UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy {

	id:number;
	user:User;

	userForm:FormGroup;

	private sub: any;

  constructor(private route:ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params=> {
  		this.id = params['id'];
  	});

    // create User
  	this.userForm = new FormGroup({
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
  		address: new FormControl('', Validators.required),
      numTel: new FormControl('', Validators.required)
  	});

    // edit User
  	if (this.id) {
  		this.userService.findById(this.id).subscribe(
  			user => {
  				this.id = user.id;
  				this.userForm.patchValue({
  					username:user.username,
  					address:user.address,
  					email:user.email,
  				});
  			},error => {
  				console.log(error);
  			}

  			);
  	}

  }

  ngOnDestroy(): void { this.sub.unsubscribe();}


  onSubmit() {
  	if (this.userForm.valid) {
   // update User
  		if (this.id) {
  		let user: User = new User(this.id,
                                this.userForm.controls['prenom'].value,
                              this.userForm.controls['email'].value,
                              null,
                              null,
                              this.userForm.controls['address'].value,
                              this.userForm.controls['numTel'].value);
		this.userService.updateUser(user).subscribe(value=>this.redirectUserPage());

  // create User with form
  } else {
		let user: User = new User(null,
                              this.userForm.controls['prenom'].value,
                              this.userForm.controls['email'].value,
                              null,
                              null,
                              this.userForm.controls['address'].value,
                              this.userForm.controls['numTel'].value);
		this.userService.saveUser(user).subscribe(value=>this.redirectUserPage());

	}


  	}
  	this.userForm.reset();
  	// this.router.navigate(['/user']);
  }
  redirectUserPage() {
  	this.router.navigate(['/user']);
  }

}
