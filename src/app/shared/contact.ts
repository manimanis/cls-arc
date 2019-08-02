import { ContactItem } from './contact-item';

export class Contact {

  numResponsable: number;
  nomPrenom: string;
  contactInfos: object;
  isSelected: boolean;

  constructor(obj = {}) {
    this.setData(obj);
  }

  setData(obj) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    this.numResponsable = +obj.numResponsable || 0;
    this.nomPrenom = obj.nomPrenom || '';
    this.isSelected = !!obj.isSelected;
    this.contactInfos = {};
    this.addContacts(obj.contactInfos);
  }

  /**
   * Verifies if two objects contains the same numResponsable and nomPrenom.
   * @param obj object
   */
  equals(obj) {
    if (typeof obj === 'undefined') {
      return false;
    }
    if (this.numResponsable === obj.numResponsable && this.nomPrenom === obj.nomPrenom) {
      return true;
    }
    return false;
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
    contactInfo.contact = this;
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
