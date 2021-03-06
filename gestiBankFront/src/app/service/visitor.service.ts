import {Injectable} from '@angular/core';
import {Visitor} from '../modele/visitor';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VisitorService {

  private apiUrl = 'http://localhost:8080/GestiBank/visitor/';

  constructor(private http: Http) { }

  findAllVisitors():Observable<Visitor[]> {
    return this.http.get(this.apiUrl)
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  findAllAffectedVisitor(affect: number): Observable<Visitor[]> {
    return this.http.get(this.apiUrl+'/affectation/'+affect)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  save(visitor: Visitor): Observable<Visitor> {
    return this.http.post(this.apiUrl,visitor)
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  deleteUserById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl+'/'+id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  
  }

  updateVisitor(id: number,visitor: Visitor): Observable<Visitor> {
    return this.http.put(this.apiUrl+'/'+id,visitor)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }

}
