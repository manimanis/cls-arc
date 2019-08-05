import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { Contact } from '../shared/contact';
import { ComponentsCartService } from '../services/components-cart.service';


@Component({
  selector: 'table-responsables',
  templateUrl: './table-responsables.component.html',
  styleUrls: ['./table-responsables.component.css']
})
export class TableResponsablesComponent implements OnInit, OnChanges, AfterContentChecked {

  @Input() selectionCartName: string;
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

  selectionMap = [];

  hasAllItemsSelected = false;

  contactsPropertyChanged = false;

  constructor(private cc: ComponentsCartService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.contacts) {
      this.contactsPropertyChanged = true;
    }
  }

  ngAfterContentChecked(): void {
    if (this.contactsPropertyChanged) {
      this.selectionMap = this.contacts.map(ct => this.cc.itemInCart(this.selectionCartName, ct, Contact.equals));
      this.refreshAllItemsSelected();
      this.contactsPropertyChanged = false;
    }
  }

  isSelected(idx: number) {
    return (idx >= 0 && idx < this.selectionMap.length) ? this.selectionMap[idx] : false;
  }

  selectAllItems(selectAll: boolean) {
    for (let i = this.contacts.length - 1; i >= 0; i--) {
      this.selectContact(i, selectAll, false);
    }
    this.hasAllItemsSelected = selectAll;
    this.allItemsSelection.emit(selectAll);
  }

  selectContact(idx: number, select: boolean, emitEvent: boolean = true) {
    const contact = this.contacts[idx];
    this.selectionMap[idx] = select;
    if (!select) {
      this.cc.removeFromCart(this.selectionCartName, contact, Contact.equals);
    } else {
      this.cc.addToCart(this.selectionCartName, contact, Contact.equals);
    }
    if (!select) {
      this.hasAllItemsSelected = false;
    } else {
      this.refreshAllItemsSelected();
    }
    if (emitEvent) {
      this.itemSelection.emit(contact);
    }
  }

  refreshAllItemsSelected() {
    this.hasAllItemsSelected = this.selectionMap.length > 0;
    for (let i = 0; i < this.selectionMap.length; i++) {
      if (!this.selectionMap[i]) {
        this.hasAllItemsSelected = false;
        break;
      }
    }
    return this.hasAllItemsSelected;
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

  removeContact(idx: number) {
    this.selectContact(idx, false);
    this.removeContactClicked.emit(this.contacts[idx]);
  }

}
