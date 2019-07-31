import { Contact } from './contact';

export class ContactItem {
  numContactItem: number;
  contact: Contact;
  typeContact: string;
  valueContact: string;
  remarque: string;

  constructor(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numContactItem = obj.numContactItem || 0;
    this.contact = obj.contact || null;
    this.typeContact = obj.typeContact || '';
    this.valueContact = obj.valueContact || '';
    this.remarque = obj.remarque || '';
  }

  clone() {
    return new ContactItem({ ...this });
  }
}

