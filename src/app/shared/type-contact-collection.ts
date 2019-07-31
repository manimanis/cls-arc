import { TypeContact } from './type-contact';

export class TypeContactCollection {
  items: TypeContact[] = [];

  constructor() { }

  clear() {
    this.items = [];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  removeItem(typeContact: TypeContact) {
    const idx = this.items.indexOf(typeContact);
    this.items.splice(idx, 1);
  }

  findByNumTypeContact(ntc: number) {
    return this.items.find(tc => tc.numTypeContact === ntc);
  }

  /**
   * Return the index of the contact type name with in the collection
   * @param contact The contact type name
   */
  indexOf(contact: string): number {
    contact = contact.toLowerCase();
    for (let i = 0; i < this.items.length; i++) {
      if (contact === this.items[i].contact.toLowerCase()) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Search by contact type name
   * @param contact The contact type name
   */
  hasContact(contact: string): boolean {
    return this.indexOf(contact) !== -1;
  }

  /**
   * Add a type contact to the collection
   * @param tc TypeContact to add
   * @param ignoreDuplicates whether to ignore duplicates or throw an error when duplicates
   */
  addTypeContact(tc: TypeContact, ignoreDuplicates: boolean = false) {
    if (!ignoreDuplicates && this.hasContact(tc.contact)) {
      throw new Error(`${tc.contact} exists in the collection.`);
    }
    tc.contactOrder = this.items.length + 1;
    this.items.push(tc);
  }

  /**
   * Add many types contacts to the collection
   * @param tca Type contacts items
   */
  addManyTypesContacts(tca: TypeContact[]) {
    tca.forEach(tci => this.addTypeContact(new TypeContact(tci)));
  }

  /**
   * Swap the order of two types contacts
   * @param idx1 first item index
   * @param idx2 second item index
   */
  swapOrder(idx1: number, idx2: number) {
    const tc1 = this.items[idx1];
    const tc2 = this.items[idx2];
    tc1.contactOrder = idx2 + 1;
    tc2.contactOrder = idx1 + 1;
    this.items[idx1] = tc2;
    this.items[idx2] = tc1;
  }

  /**
   * Sorts the items by ascending order of contactOrder property
   */
  sortItems() {
    this.items.sort((a, b) => a.contactOrder - b.contactOrder);
  }

  /**
   * Refresh the items order according to the current positions of the items
   */
  refreshOrder() {
    this.items.forEach((item, i) => item.contactOrder = i + 1);
  }
}
