import {Injectable} from '@angular/core';
import {Conseiller} from '../modele/conseiller';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConseillerService {


  private apiUrl = 'http://localhost:8080/GestiBank/';

  constructor(private http: Http) { }

  findAllConseillers():Observable<Conseiller[]> {
    return this.http.get(this.apiUrl+'/administrator/conseiller/')
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Conseiller> {
    return this.http.get(this.apiUrl+'/administrator/conseiller/'+id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveConseiller(id: number,conseiller: Conseiller): Observable<Conseiller> {
    return this.http.post(this.apiUrl+'/administrator/'+id+'/conseiller/',conseiller)
    .catch((error:any) => Observable.throw(error || 'Server error'));
   
  }

  deleteConseillerById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl+'/administrator/conseiller/'+id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
