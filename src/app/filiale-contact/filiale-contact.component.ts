import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/contact';
import { TypeContact } from '../shared/type-contact';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { TypesContactsService } from '../services/types-contacts.service';

@Component({
  selector: 'filiale-contact',
  templateUrl: './filiale-contact.component.html',
  styleUrls: ['./filiale-contact.component.css']
})
export class FilialeContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() visible = false;

  contactsTypes = new TypeContactCollection();

  constructor(private tcs: TypesContactsService) { }

  ngOnInit() {
    this.tcs.typesContactsSubject.subscribe(ctc => {
      this.contactsTypes = ctc;
    });
    this.tcs.fetchContactsTypes();
  }

  contactTypeStyle(contactType: string): string {
    return Contact.getContactIcon(contactType);
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }

}
