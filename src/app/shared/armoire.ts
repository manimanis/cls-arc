import { Salle } from './salle';
import { Etagere } from './etagere';

export class Armoire {
  numArmoire: number;
  libelle: string;
  description: string;
  observations: string;
  dateCreation: string;
  salle: Salle;
  etageres: Etagere[];

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numArmoire = obj.numArmoire || 0;
    this.libelle = obj.libelle || '';
    this.description = obj.description || '';
    this.observations = obj.observations || '';
    this.dateCreation = obj.dateCreation || new Date().toISOString();
    this.salle = obj.salle || null;
    this.etageres = [];
    this.addEtageres(obj.etageres);
  }

  addEtagere(etagere: Etagere) {
    etagere.armoire = this;
    this.etageres.push(etagere);
  }

  addEtageres(etageres: Etagere[]) {
    if (etageres instanceof Array) {
      etageres.forEach(etagere => this.addEtagere(etagere));
    }
  }

  get nbEtageres(): number {
    return this.etageres.length;
  }

  get nbBoites(): number {
    return this.etageres.reduce((total, boite) => total + boite.nbBoites, 0);
  }
}
