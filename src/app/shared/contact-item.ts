import { Contact } from './contact';

export class ContactItem {
  numContactItem: number;
  typeContact: string;
  valueContact: string;
  remarque: string;

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numContactItem = obj.numContactItem || 0;
    this.typeContact = obj.typeContact || '';
    this.valueContact = obj.valueContact || '';
    this.remarque = obj.remarque || '';
  }

  clone() {
    return new ContactItem({ ...this });
  }
}

