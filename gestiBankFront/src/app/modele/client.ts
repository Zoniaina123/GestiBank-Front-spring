import {User} from '../modele/user';
import {Conseiller} from '../modele/conseiller';
import {Compte} from '../modele/compte';

export class Client extends User {
  nom: string;
  nbEnfant: number;
  situation: string;
  conseiller: Conseiller;
  comptes: Compte[];
   
   constructor(id: number, prenom: string, email: string, username: string, pwd: string,
     address: string, numTel: string,Role: string,  nom: string, nbEnfant: number, situation: string,
     conseiller: Conseiller, comptes: Compte[]) {
     super(id, prenom, email, username, pwd, address, numTel, Role);
     this.nom = nom;
     this.nbEnfant = nbEnfant;
     this.situation = situation;
     this.conseiller = conseiller;
     this.comptes = comptes;
   }
  
}