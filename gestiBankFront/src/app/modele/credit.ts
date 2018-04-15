import {Operation} from '../modele/operation';
import {Compte} from '../modele/compte';

export class Credit extends Operation {
  
  constructor(numOperation: number, dateEffet: Date, montant: number,
  libelle: string, compte: Compte){
    super(numOperation, dateEffet, montant,
  libelle, compte);
  }
}