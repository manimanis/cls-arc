import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/contact';
import { ListeResponsablesService } from '../services/liste-responsables.service';
import { ComponentsCartService } from '../services/components-cart.service';

@Component({
  selector: 'select-responsables',
  templateUrl: './select-responsables.component.html',
  styleUrls: ['./select-responsables.component.css']
})
export class SelectResponsablesComponent implements OnInit {

  @Input() componentId = 'ListeResponsables';

  searchStr = '';
  pageNumber = 0;
  contactsItemsCount = 0;
  recordsCount = 0;
  orderDir = 'ASC';

  contacts: Contact[] = [];
  selectedContacts: Contact[];

  contact: Contact;

  allItemsSelected = false;

  constructor(private resp: ListeResponsablesService, private cc: ComponentsCartService) { }

  ngOnInit() {
    this.selectedContacts = this.cc.getCart(this.componentId);
  }

  // Search
  searchPattern(searchStr: string) {
    this.searchStr = searchStr;
    this.pageNumber = 0;
    this.resp.fetchResponsables(this.searchStr, this.orderDir, this.pageNumber, 5)
      .subscribe((data: any) => {
        this.contacts = [];
        this.allItemsSelected = data.data.items.length > 0;
        this.filterData(data.data);
        this.pageNumber++;
      });
  }

  fetchMore() {
    this.resp.fetchResponsables(this.searchStr, this.orderDir, this.pageNumber, 5)
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

  filterData(data: any) {
    data.items.forEach(item => {
      const ct = new Contact(item);
      this.contacts.push(ct);
      this.contactsItemsCount = data.totalCount;
      this.recordsCount = data.recordsCount;
    });
  }

  toggleSelection(contact: Contact) {
    // if (!this.cc.itemInCart(this.componentId, contact, Contact.equals)) {
    //   contact.isSelected = true;
    //   this.cc.addToCart(this.componentId, contact);
    //   this.checkSelection();
    // } else {
    //   contact.isSelected = false;
    //   this.allItemsSelected = false;
    //   this.cc.removeFromCart(this.componentId, contact, Contact.equals);
    // }
  }

  toggleSelectAll() {
    // this.selectAllItems(!this.allItemsSelected);
  }
}
