import { Etagere } from './etagere';

export class Boite {
  numBoite: number;
  observations: string;
  dateClassement: string;
  etagere: Etagere;

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numBoite = obj.numBoite || 0;
    this.observations = obj.observations || '';
    this.dateClassement = obj.dateClassement || new Date().toISOString();
    this.etagere = obj.etagere || null;
  }
}
