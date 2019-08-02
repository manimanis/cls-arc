export class TypeContact {
  /**
   * Unique identifier of one type contact.
   */
  numTypeContact: number;
  /**
   * The contact string value that's displayed to users.
   */
  contact: string;
  /**
   * The fontawesome icon associated with this type contact.
   */
  contactIcon: string;
  /**
   * Determine in which rank this item is displayed when displaying responsable informations.
   */
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
