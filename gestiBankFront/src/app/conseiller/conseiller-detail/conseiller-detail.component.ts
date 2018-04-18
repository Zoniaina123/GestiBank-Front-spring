import { Component, OnInit } from '@angular/core';
import {ConseillerService} from '../../service/conseiller.service';
import {Conseiller} from '../../modele/conseiller';
import {ActivatedRoute, Router} from '@angular/router';
import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-conseiller-detail',
  templateUrl: './conseiller-detail.component.html',
  styleUrls: ['./conseiller-detail.component.css'],
  providers:[ConseillerService]
})
export class ConseillerDetailComponent implements OnInit {


   idAdmin: number;
  conseiller: Conseiller;

  consForm:FormGroup;

  private sub: any;

  constructor(private route:ActivatedRoute, private router: Router, private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=> {
      this.idAdmin = params['id'];
    });

    // create User
    this.consForm = new FormGroup({
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      username: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      numTel: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required)
    });


  }

  ngOnDestroy(): void { }


  onSubmit() {
    if (this.consForm.valid) {
   // create conseiller
    let conseiller: Conseiller = new Conseiller(null,
                              this.consForm.controls['prenom'].value,
                              this.consForm.controls['email'].value,
                              this.consForm.controls['username'].value,
                              this.consForm.controls['pwd'].value,
                              this.consForm.controls['address'].value,
                              this.consForm.controls['numTel'].value,
                              null,
                              this.consForm.controls['matricule'].value,
                              null,
                              null,
                              null);
    this.conseillerService.saveConseiller(this.idAdmin,conseiller).subscribe(value=>this.redirectConsPage());

  }



    this.consForm.reset();
    // this.router.navigate(['/administrators']);
  }
  redirectConsPage() {
    this.router.navigate(['/administrator/conseiller']);
  }
}
