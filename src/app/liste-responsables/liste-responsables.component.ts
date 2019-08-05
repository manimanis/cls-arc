import { Component, OnInit, Input } from '@angular/core';
import { ListeResponsablesService } from '../services/liste-responsables.service';
import { Contact } from '../shared/contact';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, throttle, throttleTime } from 'rxjs/operators';
import { ComponentUtil } from '../shared/components-utils';
import { ComponentsCartService } from '../services/components-cart.service';

@Component({
  selector: 'liste-responsables',
  templateUrl: './liste-responsables.component.html',
  styleUrls: ['./liste-responsables.component.css']
})
export class ListeResponsablesComponent implements OnInit {

  @Input() componentId = 'ListeResponsables';
  @Input() displayMode = 'list';

  searchStr = '';
  pageNumber = 0;
  contactsItemsCount = 0;
  recordsCount = 0;
  orderDir = 'ASC';

  contacts: Contact[] = [];

  contact: Contact;
  isNewContact: boolean;

  allItemsSelected = false;

  searchForm: FormGroup;

  constructor(private resp: ListeResponsablesService, private cc: ComponentsCartService) { }

  ngOnInit() {
    this.fetchMore();
    this.cc.createCart(this.componentId, (cart) => {
      cart.forEach((item, i) => cart[i] = new Contact(item));
    });
  }

  filterData(data: any) {
    data.items.forEach(item => {
      const ct = new Contact(item);
      ct.isSelected = this.cc.itemInCart(this.componentId, ct);
      this.allItemsSelected = this.allItemsSelected && ct.isSelected;
      this.contacts.push(ct);
      this.contactsItemsCount = data.totalCount;
      this.recordsCount = data.recordsCount;
    });
  }

  fetchMore() {
    this.resp.fetchResponsables(this.searchStr, this.orderDir, this.pageNumber)
      .subscribe((data: any) => {
        this.filterData(data.data);
        this.pageNumber++;
      });
  }

  changeOrderDirection(orderDir = 'ASC') {
    this.orderDir = orderDir;
    this.resp.fetchResponsables(this.searchStr, this.orderDir, 0, this.contacts.length)
      .subscribe((data: any) => {
        this.contacts = [];
        this.allItemsSelected = data.data.items.length > 0;
        this.filterData(data.data);
      });
  }

  removeItem(contact: Contact) {
    const idx = this.contacts.indexOf(contact);
    if (idx !== -1) {
      this.contacts.splice(idx, 1);
    }
  }

  checkSelection() {
    this.allItemsSelected = this.contacts.length > 0;
    this.contacts.forEach(ct => {
      this.allItemsSelected = this.allItemsSelected && this.cc.itemInCart(this.componentId, ct);
    });
  }

  selectContact(contact: Contact) {
    if (!this.cc.itemInCart(this.componentId, contact)) {
      this.cc.addToCart(this.componentId, contact);
    }
    contact.isSelected = true;
  }

  deselectContact(contact: Contact) {
    if (this.cc.itemInCart(this.componentId, contact)) {
      this.cc.removeFromCart(this.componentId, contact);
    }
    contact.isSelected = false;
  }

  toggleSelection(contact: Contact) {
    if (!this.cc.itemInCart(this.componentId, contact)) {
      contact.isSelected = true;
      this.cc.addToCart(this.componentId, contact);
      this.checkSelection();
    } else {
      contact.isSelected = false;
      this.allItemsSelected = false;
      this.cc.removeFromCart(this.componentId, contact);
    }
  }

  toggleSelectAll() {
    this.selectAllItems(!this.allItemsSelected);
  }

  selectedContacts(): Contact[] {
    return this.cc.getCart(this.componentId);
  }

  selectAllItems(select: boolean) {
    this.allItemsSelected = select;
    this.contacts.forEach(ct => {
      if (this.allItemsSelected) {
        this.selectContact(ct);
      } else {
        this.deselectContact(ct);
      }
    });
  }

  // Search
  searchPattern(searchStr: string) {
    this.searchStr = searchStr;
    this.pageNumber = 0;
    this.resp.fetchResponsables(this.searchStr, this.orderDir, this.pageNumber)
      .subscribe((data: any) => {
        this.contacts = [];
        this.allItemsSelected = data.data.items.length > 0;
        this.filterData(data.data);
        this.pageNumber++;
      });
  }

  // ---------------------------------------------------------
  addNewContact() {
    this.contact = new Contact();
    this.isNewContact = true;
    this.displayMode = 'edit';
  }

  editContact(contact: Contact) {
    this.contact = contact;
    this.isNewContact = false;
    this.displayMode = 'edit';
  }

  saveContact(contact: Contact) {
    if (this.isNewContact) {
      this.resp.insertResponsable(contact)
        .subscribe((data: any) => {
          if (data.errors.length === 0) {
            this.contacts.unshift(new Contact(data.data));
            this.displayMode = 'list';
          }
        });
    } else {
      this.resp.updateResponsable(contact)
        .subscribe((data: any) => {
          if (data.errors.length === 0) {
            const uct = this.contacts.find(ct => ct.numResponsable === +data.data.numResponsable);
            if (uct) {
              data.data.isSelected = contact.isSelected;
              uct.setData(data.data);
            }
            this.displayMode = 'list';
          }
        });
    }
  }

  deleteContact(contact: Contact) {
    if (!confirm(`Etes-sûr de vouloir supprimer ce responsable :
${contact.nomPrenom} ?`)) {
      return;
    }
    this.resp.deleteResponsable(contact)
      .subscribe((data: any) => {
        const idx = this.contacts.reduce((last, curr, i) => (curr.numResponsable === contact.numResponsable) ? i : last, -1);
        if (idx !== -1) {
          this.contacts.splice(idx, 1);
        }
      });
  }

  cancelEditContact() {
    this.displayMode = 'list';
  }
}
