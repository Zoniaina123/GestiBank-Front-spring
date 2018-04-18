import {Injectable} from '@angular/core';
import {Administrator} from '../modele/administrator';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdministratorService {


  private apiUrl = 'http://localhost:8080/GestiBank/administrator/';

  constructor(private http: Http) { }

  findAllAdministrators():Observable<Administrator[]> {
    return this.http.get(this.apiUrl)
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }
  
  findById(id: number): Observable<Administrator> {
    return this.http.get(this.apiUrl+'/'+id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  saveAdministrator(administrator: Administrator): Observable<Administrator> {
    return this.http.post(this.apiUrl,administrator)
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  deleteAdministrator(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl+id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
