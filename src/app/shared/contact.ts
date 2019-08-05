import { ContactItem } from './contact-item';

export class Contact {

  numResponsable: number;
  nomPrenom: string;
  contactInfos: object;

  constructor(obj = {}) {
    this.setData(obj);
  }

  /**
   * Verifies if two objects contains the same numResponsable and nomPrenom.
   * @param obj1 object
   * @param obj2 object
   */
  static equals(obj1, obj2): boolean {
    if (obj1 === null || obj2 === null || typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
      return false;
    }
    if (obj1.numResponsable === obj2.numResponsable && obj1.nomPrenom === obj2.nomPrenom) {
      return true;
    }
    return false;
  }

  setData(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numResponsable = +obj.numResponsable || 0;
    this.nomPrenom = obj.nomPrenom || '';
    this.contactInfos = {};
    this.addContacts(obj.contactInfos);
  }



  /**
   * Return the types contacts (string value) array for the user.
   */
  getTypesContacts() {
    return Object.keys(this.contactInfos);
  }

  /**
   * Inserts a new contact item to the array.
   * @param contactInfo ContactItem
   */
  addContactInfo(contactInfo: ContactItem) {
    if (!this.contactInfos[contactInfo.typeContact]) {
      this.contactInfos[contactInfo.typeContact] = [];
    }
    this.contactInfos[contactInfo.typeContact].push(contactInfo);
  }

  /**
   * Add the contact items stored in contactInfos.
   * Example:
   * contactInfos:
   * {
   *   Téléphone: [
   *     { numContactItem: "1", numResponsable: "1", typeContact: "Téléphone", valueContact: "xx xxx xxx", remarque: "Principal" },
   *     { numContactItem: "2", numResponsable: "1", typeContact: "Téléphone", valueContact: "40 268 787", remarque: "Secondaire" }
   *   ], ...
   * }
   * @param contactInfos object
   */
  addContacts(contactInfos: any) {
    if (!contactInfos) {
      return;
    }

    for (const k of Object.keys(contactInfos)) {
      contactInfos[k].forEach(ci => this.addContactInfo(ci));
    }
  }

  /**
   * Returns true if the contact has this type of contact
   * @param contact string
   */
  hasTypeContact(contact: string): boolean {
    return !!this.contactInfos[contact];
  }

  /**
   * Create the specified type of contact if it doesn't exist, if it exists it does nothing.
   * @param contact string
   */
  createTypeContact(contact: string) {
    if (!this.hasTypeContact(contact)) {
      this.contactInfos[contact] = [];
    }
  }

  /**
   * Return an array of all contacts items that belong to one type of contact.
   * @param contact string
   */
  getContactsItems(contact: string): ContactItem[] {
    if (!this.hasTypeContact(contact)) {
      this.createTypeContact(contact);
    }
    return this.contactInfos[contact];
  }

  /**
   * Creates an empty contact item for the specified type contact.
   * And than insert it in the current contact.
   * @param contact string
   */
  createContactItem(contact: string) {
    const ci = new ContactItem({ typeContact: contact });
    this.addContactInfo(ci);
    return ci;
  }
}
