import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from '../shared/contact';


@Component({
  selector: 'liste-responsables-v2',
  templateUrl: './liste-responsables-v2.component.html',
  styleUrls: ['./liste-responsables-v2.component.css']
})
export class ListeResponsablesV2Component implements OnInit, OnChanges {

  @Input() contacts: Contact[] = [];

  @Input() canSelect = true;
  @Output() allItemsSelection = new EventEmitter<boolean>();
  @Output() itemSelection = new EventEmitter<Contact>();

  @Input() hasOperations = true;
  @Input() canEdit = true;
  @Input() canDelete = true;
  @Input() canRemove = false;

  @Input() canReorder = true;
  @Input() orderDir = 'ASC';
  @Output() orderChanged = new EventEmitter<string>();

  @Output() editContactClicked = new EventEmitter<Contact>();
  @Output() deleteContactClicked = new EventEmitter<Contact>();
  @Output() removeContactClicked = new EventEmitter<Contact>();

  hasAllItemsSelected = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.contacts) {
      this.refreshAllItemsSelected();
    }
  }

  selectAllItems(selectAll: boolean) {
    this.hasAllItemsSelected = selectAll;
    this.contacts.forEach(ct => {
      this.selectContact(ct, selectAll);
    });
    this.allItemsSelection.emit(selectAll);
  }

  selectContact(contact: Contact, select: boolean) {
    contact.isSelected = select;
    if (!contact.isSelected) {
      this.hasAllItemsSelected = false;
    } else {
      this.refreshAllItemsSelected();
    }
    this.itemSelection.emit(contact);
  }

  refreshAllItemsSelected() {
    if (!this.contacts || this.contacts.length === 0) {
      this.hasAllItemsSelected = false;
      return;
    }
    for (const ct of this.contacts) {
      if (!ct.isSelected) {
        this.hasAllItemsSelected = false;
        return;
      }
    }
    this.hasAllItemsSelected = true;
  }

  changeOrderDirection() {
    if (this.orderDir === '') {
      this.orderDir = 'ASC';
    } else if (this.orderDir === 'ASC') {
      this.orderDir = 'DESC';
    } else if (this.orderDir === 'DESC') {
      this.orderDir = '';
    }
    this.orderChanged.emit(this.orderDir);
  }

  editContact(contact: Contact) {
    this.editContactClicked.emit(contact);
  }

  deleteContact(contact: Contact) {
    this.deleteContactClicked.emit(contact);
  }

  removeContact(contact: Contact) {
    this.removeContactClicked.emit(contact);
  }

}
