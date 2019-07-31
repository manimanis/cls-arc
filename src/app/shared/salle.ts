import { Filiale } from './filiale';
import { Armoire } from './armoire';

export class Salle {
  numSalle: number;
  nomSalle: string;
  description: string;
  observations: string;
  dateCreation: string;
  filiale: Filiale;
  armoires: Armoire[];

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numSalle = obj.numSalle || 0;
    this.nomSalle = obj.nomSalle || '';
    this.description = obj.description || '';
    this.observations = obj.observations || '';
    this.dateCreation = obj.dateCreation || new Date().toISOString();
    this.filiale = obj.filiale || null;
    this.armoires = [];
    this.addArmoires(obj.armoires);
  }

  addArmoire(armoire: Armoire) {
    armoire.salle = this;
    this.armoires.push(armoire);
  }

  addArmoires(armoires: Armoire[]) {
    if (armoires instanceof Array) {
      armoires.forEach(armoire => this.addArmoire(armoire));
    }
  }

  get nbArmoires() {
    return this.armoires.length;
  }

  get nbEtageres(): number {
    return this.armoires.reduce((total, armoire) => total + armoire.nbEtageres, 0);
  }

  get nbBoites(): number {
    return this.armoires.reduce((total, armoire) => total + armoire.nbBoites, 0);
  }
}
