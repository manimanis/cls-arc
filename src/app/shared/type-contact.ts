export class TypeContact {
  numTypeContact: number;
  contact: string;
  contactIcon: string;
  contactOrder: number;

  constructor(obj: any = {}) {
    this.setData(obj);
  }

  setData(obj: any = {}) {
    this.numTypeContact = +obj.numTypeContact || 0;
    this.contact = obj.contact || '';
    this.contactIcon = obj.contactIcon || '';
    this.contactOrder = +obj.contactOrder || -1;
  }
}
