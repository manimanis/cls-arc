import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/contact';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { TypesContactsService } from '../services/types-contacts.service';

@Component({
  selector: 'card-responsable',
  templateUrl: './card-responsable.component.html',
  styleUrls: ['./card-responsable.component.css']
})
export class CardResponsableComponent implements OnInit {

  @Input() contact: Contact;
  @Input() visible = false;
  @Input() collapsible = true;

  typesContacts = new TypeContactCollection();

  constructor(private tcs: TypesContactsService) { }

  ngOnInit() {
    this.tcs.fetchContacts()
      .subscribe((data: any) => {
        this.typesContacts = this.tcs.typesContacts;
      });
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }

}
