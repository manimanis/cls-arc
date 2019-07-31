import { ContactItem } from './contact-item';

export class Contact {

  static TYPES_CONTACT = [];

  numResponsable: number;
  nomPrenom: string;
  contactInfos: object;
  isSelected: boolean;

  static getContactsTypes() {
    return Contact.TYPES_CONTACT
      .map(tc => tc.contact);
  }

  static getContactIcon(contact: string): string {
    const ct = Contact.TYPES_CONTACT.find(cti => cti.contact === contact);
    return (ct && ct.contactIcon) || '';
  }

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

  equals(obj) {
    if (typeof obj === 'undefined') {
      return false;
    }
    if (this.numResponsable === obj.numResponsable && this.nomPrenom === obj.nomPrenom) {
      return true;
    }
    return false;
  }

  addContactInfo(contactInfo: ContactItem) {
    contactInfo.contact = this;
    // if (!Contact.TYPES_CONTACT.includes(contactInfo.typeContact)) {
    //   Contact.TYPES_CONTACT.push(contactInfo.typeContact);
    // }
    if (!this.contactInfos[contactInfo.typeContact]) {
      this.contactInfos[contactInfo.typeContact] = [];
    }
    this.contactInfos[contactInfo.typeContact].push(contactInfo);
  }

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

  createContactItem(contact: string) {
    const ci = new ContactItem({ typeContact: contact });
    this.addContactInfo(ci);
    return ci;
  }
}
