import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() canRemoveItems = true;
  @Input() canReorderItems = true;
  @Input() canAddItems = true;
  @Input() isNew = false;
  @Input() contact: Contact = new Contact();

  @Output() submitContact: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() cancelSubmitContact: EventEmitter<string> = new EventEmitter<string>();

  frm: FormGroup;
  typesContacts: TypeContactCollection = new TypeContactCollection();


  constructor(private tcs: TypesContactsService, private lrs: ListeResponsablesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm(this.contact);
    this.tcs.fetchContacts()
      .subscribe(() => {
        this.typesContacts = this.tcs.typesContacts;
        this.initForm(this.contact);
      });
    // this.lrs.fetchResponsable(1)
    //   .subscribe((data: any) => {
    //     this.contact = new Contact(data.data);
    //     this.initForm(this.contact);
    //   });
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
    if (ci.value.valueContact !== '' || ci.value.remarque !== '') {
      if (!confirm(`Voulez vous supprimer ce contact :\n\n${ci.value.valueContact} - ${ci.value.remarque}`)) {
        return;
      }
    }
    (this.frm.get(contact) as FormArray).removeAt(idx);
  }

  swapContactsItems(contact: string, i1: number, i2: number) {
    const fa = this.frm.get(contact) as FormArray;
    const fc1 = fa.get(i1 + '');
    const fc2 = fa.get(i2 + '');
    fa.controls[i1] = fc2;
    fa.controls[i2] = fc1;
  }

  performSubmitContact() {
    const frmVals = this.frm.value;

    const ct = new Contact({
      numResponsable: this.contact.numResponsable,
      nomPrenom: frmVals.nomPrenom
    });
    this.typesContacts.items.forEach(tc => {
      const items = frmVals[tc.contact];
      if (items.length > 0) {
        items.forEach(item => ct.addContactInfo(new ContactItem({
          typeContact: item.typeContact,
          valueContact: item.valueContact,
          remarque: item.remarque
        })));
      }
    });

    this.submitContact.emit(ct);
  }

  cancel() {
    this.cancelSubmitContact.emit('cancel');
  }
}
