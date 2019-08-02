import { Component, OnInit } from '@angular/core';
import { TypesContactsService } from '../services/types-contacts.service';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Contact } from '../shared/contact';
import { ContactItem } from '../shared/contact-item';
import { ListeResponsablesService } from '../services/liste-responsables.service';

@Component({
  selector: 'form-edit-responsable',
  templateUrl: './form-edit-responsable.component.html',
  styleUrls: ['./form-edit-responsable.component.css']
})
export class FormEditResponsableComponent implements OnInit {

  frm: FormGroup;
  typesContacts: TypeContactCollection = new TypeContactCollection();
  contact: Contact = new Contact();

  constructor(private tcs: TypesContactsService, private lrs: ListeResponsablesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm(this.contact);
    this.tcs.fetchContacts()
      .subscribe(() => {
        this.typesContacts = this.tcs.typesContacts;
        this.initForm(this.contact);
      });
    this.lrs.fetchResponsable(1)
      .subscribe((data: any) => {
        this.contact = new Contact(data.data);
        this.initForm(this.contact);
      });
  }

  initForm(contact: Contact) {
    this.frm = this.fb.group({
      nomPrenom: [contact.nomPrenom]
    });

    this.typesContacts.items.forEach(tc => {
      const arr = this.fb.array([]);
      if (!this.contact.hasTypeContact(tc.contact)) {
        this.contact.createTypeContact(tc.contact);
      }
      this.contact.getContactsItems(tc.contact).forEach(ci => arr.push(this.buildContactItem(ci)));
      //
      this.frm.addControl(tc.contact, arr);
    });

    console.log(this.frm);
  }

  buildContactItem(ci: ContactItem) {
    return this.fb.group({
      typeContact: [ci.typeContact],
      valueContact: [ci.valueContact],
      remarque: [ci.remarque]
    });
  }

  addContactItem(contact: string) {
    (this.frm.get(contact) as FormArray).push(this.buildContactItem(this.contact.createContactItem(contact)));
  }

  removeContactItem(contact: string, idx: number) {
    const ci = this.frm.get(contact + '.' + idx) as FormGroup;
    console.log(ci.value);
    if (ci.value.valueContact !== '' || ci.value.remarque !== '') {
      if (!confirm(`Voulez vous supprimer ce contact :\n\n${ci.value.valueContact} - ${ci.value.remarque}`)) {
        return;
      }
    }
    (this.frm.get(contact) as FormArray).removeAt(idx);
  }
}
