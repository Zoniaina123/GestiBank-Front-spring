import {Client} from '../modele/client';
import {Operation} from '../modele/operation';

export class Compte {
  
  numeroCompte: number;
  solde: number;
  dateCreation: Date;
  
  client: Client;
  
  operations: Operation[];
  
  constructor(numeroCompte: number, solde: number, dateCreation: Date, client: Client,
  operations: Operation[]){
    this.numeroCompte=numeroCompte;
    this.solde=solde;
    this.dateCreation=dateCreation;
    this.client=client;
    this.operations=operations;
  }
}