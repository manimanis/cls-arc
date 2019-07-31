import { Salle } from './salle';
import { Contact } from './contact';

export class Filiale {
  numFiliale: number;
  nomFiliale: string;
  description: string;
  adresse: string;
  observations: string;
  dateCreation: string;
  contacts: Contact[];
  salles: Salle[];

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numFiliale = obj.numFiliale || 0;
    this.nomFiliale = obj.nomFiliale || '';
    this.description = obj.description || '';
    this.adresse = obj.adresse || '';
    this.observations = obj.observations || '';
    this.dateCreation = obj.dateCreation || new Date().toISOString();
    this.contacts = (obj.contacts && [...obj.contacts]) || [];
    this.salles = [];
    this.addSalles(obj.salles);
  }

  addSalle(salle: Salle) {
    salle.filiale = this;
    this.salles.push(salle);
  }

  addSalles(salles: Salle[]) {
    if (salles instanceof Array) {
      salles.forEach(salle => this.addSalle(salle));
    }
  }

  get nbSalles(): number {
    return this.salles.length;
  }

  get nbArmoires(): number {
    return this.salles.reduce((total, salle) => total + salle.nbArmoires, 0);
  }

  get nbEtageres(): number {
    return this.salles.reduce((total, salle) => total + salle.nbEtageres, 0);
  }

  get nbBoites(): number {
    return this.salles.reduce((total, salle) => total + salle.nbBoites, 0);
  }
}
