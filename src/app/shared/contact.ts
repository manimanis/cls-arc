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

  constructor(obj) {
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
    for (const k of Object.keys(contactInfos)) {
      contactInfos[k].forEach(ci => this.addContactInfo(ci));
    }
  }
}
