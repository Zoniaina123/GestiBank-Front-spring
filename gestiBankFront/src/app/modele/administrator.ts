import {User} from '../modele/user';
import {Conseiller} from '../modele/conseiller';

export class Administrator extends User {
  
  conseillers: Conseiller[];
  
  constructor(id: number, prenom: string, email: string, username: string, pwd: string,
     address: string, numTel: string,Role: string, conseillers: Conseiller[]){
  super(id, prenom, email, username, pwd, address, numTel, Role);
  this.conseillers = conseillers;
}
}