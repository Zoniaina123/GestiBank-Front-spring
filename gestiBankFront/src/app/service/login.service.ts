import {Injectable} from '@angular/core';
import {Auth} from '../modele/auth';
import {User} from '../modele/user';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

private apiUrl = 'http://localhost:8080/GestiBank/';
  
  constructor(private http: Http) { }
  
  isValidUser(auth: Auth): Observable<User> {
    return this.http.post(this.apiUrl+'/login/user/',auth)
    .map((response: Response) => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

}
