import {Injectable} from '@angular/core';
import {Conseiller} from '../modele/conseiller';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConseillerService {


  private apiUrl = 'http://localhost:8080/GestiBank/administrator/conseiller/';

  constructor(private http: Http) { }

  findAllConseillers():Observable<Conseiller[]> {
    return this.http.get(this.apiUrl)
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }


  saveConseiller(conseiller: Conseiller): Observable<Conseiller> {
    return this.http.post(this.apiUrl,conseiller)
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  deleteConseillerById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl+id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
