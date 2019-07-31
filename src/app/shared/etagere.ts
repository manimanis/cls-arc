import { Armoire } from './armoire';
import { Boite } from './boite';

export class Etagere {
  numEtagere: number;
  libelle: string;
  description: string;
  observations: string;
  dateCreation: string;
  armoire: Armoire;
  boites: Boite[];

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numEtagere = obj.numEtagere || 0;
    this.libelle = obj.libelle || '';
    this.description = obj.description || '';
    this.observations = obj.observations || '';
    this.dateCreation = obj.dateCreation || new Date().toISOString();
    this.armoire = obj.armoire || null;
    this.boites = (obj.boites && [...obj.boites]) || [];
  }

  get nbBoites(): number {
    return this.boites.length;
  }
}
