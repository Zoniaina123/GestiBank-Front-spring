import {Injectable} from '@angular/core';
import {Administrator} from '../modele/administrator';
import { Client } from '../modele/client';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ClientService {
  private apiUrl = 'http://localhost:8080/GestiBank/conseiller/';
  

  constructor(private http: Http) {}
  
  saveClient(idCon: number,idVi: number, client: Client): Observable<Client> {
    return this.http.post(this.apiUrl+idCon+'/visitor/'+idVi+'/client/',client)
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

}
