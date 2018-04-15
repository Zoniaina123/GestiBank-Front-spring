import {User} from '../modele/user';
import {Client} from '../modele/client';
import {Administrator} from '../modele/administrator';

export class Conseiller extends User {
  
  matricule: number;
  dateDebut: Date;
  clients: Client[];
  administrator: Administrator;
  
  constructor(id: number, prenom: string, email: string, username: string, pwd: string,
     address: string, numTel: string, matricule: number, dateDebut: Date,
   clients: Client[], administrator: Administrator){
    super(id, prenom, email, username, pwd, address, numTel);
    
    this.matricule = matricule;
    this.dateDebut = dateDebut;
    this.clients = clients;
    this.administrator = administrator;
  }
}