import {Compte} from '../modele/compte';

export class Operation {
  numOperation: number;
  dateEffet: Date;
  montant: number;
  libelle: string;
  compte: Compte;
  
  constructor(numOperation: number, dateEffet: Date, montant: number,
  libelle: string, compte: Compte) {
    this.numOperation = numOperation;
    this.dateEffet = dateEffet;
    this.montant = montant;
    this.libelle = libelle;
    this.compte = compte;
  }
}