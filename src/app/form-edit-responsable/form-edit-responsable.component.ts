import { Component, OnInit } from '@angular/core';
import { TypesContactsService } from '../services/types-contacts.service';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../shared/contact';
import { ContactItem } from '../shared/contact-item';

@Component({
  selector: 'form-edit-responsable',
  templateUrl: './form-edit-responsable.component.html',
  styleUrls: ['./form-edit-responsable.component.css']
})
export class FormEditResponsableComponent implements OnInit {

  frm: FormGroup;
  typesContacts: TypeContactCollection = new TypeContactCollection();
  contact: Contact = new Contact();

  constructor(private tcs: TypesContactsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.frm = this.fb.group({
      nomPrenom: ['']
    });
    this.tcs.fetchContacts()
      .subscribe(() => {
        this.typesContacts = this.tcs.typesContacts;
        this.initContactData();
      });
  }

  buildContactItem(ci: ContactItem) {
    return this.fb.group({
      contactValue: [ci.valueContact],
      remarque: [ci.remarque]
    });
  }

  initContactData() {
    this.typesContacts.items.forEach(tc => {
      this.contact.createTypeContact(tc.contact);
      const ci = this.contact.createContactItem(tc.contact);
      this.frm.setControl(tc.contact, this.fb.array([this.buildContactItem(ci)]));
    });
  }

}
