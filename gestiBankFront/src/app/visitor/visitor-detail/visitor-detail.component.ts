import { Visitor } from '../../modele/visitor';
import { VisitorService } from '../../service/visitor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-detail',
  templateUrl: './visitor-detail.component.html',
  styleUrls: ['./visitor-detail.component.css'],
  providers:[VisitorService]
})
export class VisitorDetailComponent implements OnInit {

  visitor:Visitor;

  visitorForm:FormGroup;
  constructor(private router: Router,private visitorService: VisitorService,) { }

  ngOnInit() {
    
    // create Visitor
    this.visitorForm = new FormGroup({
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      address: new FormControl('', Validators.required),
      numTel: new FormControl('', Validators.required)
    });
  }
  
    onSubmit() {
    if (this.visitorForm.valid) {
  
    let visitor: Visitor = new  Visitor(null,
                              this.visitorForm.controls['prenom'].value,
                              this.visitorForm.controls['email'].value,
                              null,
                              null,
                              this.visitorForm.controls['address'].value,
                              this.visitorForm.controls['numTel'].value, null, null);
    this.visitorService.save(visitor).subscribe(value=>this.AccueilPage());

  }

    this.visitorForm.reset();
    // this.router.navigate(['/user']);
  }
  
  AccueilPage() {
    this.router.navigate(['']);
  }

}
