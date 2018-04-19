import {Injectable} from '@angular/core';
import { Compte } from '../modele/compte';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompteService {
  private apiUrl = 'http://localhost:8080/GestiBank/';

  constructor(private http: Http) {}
  
  findCompteClient(idClient: number):Observable<Compte[]> {
    return this.http.get(this.apiUrl+'/client/'+idClient+'/comptes')
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }


}
