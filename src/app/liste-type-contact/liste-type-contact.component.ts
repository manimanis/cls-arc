import { Component, OnInit, Input } from '@angular/core';
import { TypesContactsService } from '../services/types-contacts.service';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { TypeContact } from '../shared/type-contact';
import { Type } from '@angular/compiler';

@Component({
  selector: 'liste-type-contact',
  templateUrl: './liste-type-contact.component.html',
  styleUrls: ['./liste-type-contact.component.css']
})
export class ListeTypeContactComponent implements OnInit {

  @Input() canEdit = true;
  @Input() canAdd = true;
  @Input() canDelete = true;
  @Input() canReorder = true;

  editMode = false;
  displayEditForm = true;
  displayAddForm = true;
  displayMode = 'list-mode';
  notAffectedIds = [];
  affectedIds = [];

  contactsTypes = new TypeContactCollection();
  newTypeContact = new TypeContact();

  constructor(private tcs: TypesContactsService) { }

  ngOnInit() {
    this.tcs.typesContactsSubject.subscribe(ctc => {
      this.contactsTypes = ctc;
    });
    this.tcs.fetchContactsTypes();
  }

  ///////////////////////////////////////////////////////////////////////////////////
  switchToReorderMode() {
    this.displayAddForm = false;
    this.displayEditForm = false;
    this.displayMode = 'reorder-mode';
    this.resetItemsOrder();
  }

  switchToListMode() {
    this.displayAddForm = true;
    this.displayEditForm = true;
    this.displayMode = 'list-mode';
    this.notAffectedIds = [];
    this.affectedIds = [];
  }

  resetItemsOrder() {
    this.notAffectedIds = this.contactsTypes.items.map(ct => ct.numTypeContact);
    this.affectedIds = [];
  }

  addToAffectedId(typeContact: TypeContact) {
    const idx = this.notAffectedIds.indexOf(typeContact.numTypeContact);
    if (idx !== -1) {
      this.notAffectedIds.splice(idx, 1);
      this.affectedIds.push(typeContact.numTypeContact);
    }
  }

  reorderItemsAndUpdate() {
    this.contactsTypes.items.forEach((ct, i) => {
      let ordre = this.affectedIds.indexOf(ct.numTypeContact) + 1;
      if (ordre === 0) {
        ordre = this.notAffectedIds.indexOf(ct.numTypeContact) + this.affectedIds.length + 1;
      }
      ct.contactOrder = ordre;
    });
    this.contactsTypes.sortItems();
    this.tcs.updateAllContactsTypes().subscribe(data => { });
    this.switchToListMode();
  }

  ///////////////////////////////////////////////////////////////////////////////////
  insertTypeContact(typeContact: TypeContact) {
    if (!this.contactsTypes.hasContact(typeContact.contact)) {
      this.contactsTypes.addTypeContact(typeContact);
      this.tcs.insertContactType(typeContact).subscribe(
        (data: any) => {
          typeContact.numTypeContact = +data.data.numTypeContact;
          this.newTypeContact = new TypeContact({});
        }
      );
    }
  }

  updateTypeContact(typeContact: TypeContact) {
    typeContact.numTypeContact = this.newTypeContact.numTypeContact;
    typeContact.contactOrder = this.newTypeContact.contactOrder;
    this.tcs.updateContactType(typeContact)
      .subscribe((data: any) => {
        this.cancelEditContact(null);
      });
  }

  removeTypeContact(typeContact: TypeContact) {
    if (confirm('Etes-vous sûr de vouloir supprimer ce type contact ?')) {
      this.tcs.deleteContactType(typeContact).subscribe(
        (data: any) => this.contactsTypes.removeItem(typeContact)
      );
    }
  }

  editTypeContact(typeContact: TypeContact) {
    this.editMode = true;
    this.newTypeContact = new TypeContact(typeContact);
  }

  cancelEditContact(s: string) {
    this.editMode = false;
    this.newTypeContact = new TypeContact();
  }
}
