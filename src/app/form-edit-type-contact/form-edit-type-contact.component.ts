import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { TypeContact } from '../shared/type-contact';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { TypeContactCollection } from '../shared/type-contact-collection';

@Component({
  selector: 'form-edit-type-contact',
  templateUrl: './form-edit-type-contact.component.html',
  styleUrls: ['./form-edit-type-contact.component.css']
})
export class FormEditTypeContactComponent implements OnInit, OnChanges {


  static componentCount = 0;
  identifier: number;
  typeContactForm: FormGroup;

  contactCtrl: FormControl;

  @Input() typeContactCollection: TypeContactCollection;
  @Input() typeContact = new TypeContact();
  @Input() insertMode = true;

  @Output() submitData = new EventEmitter<TypeContact>();
  @Output() cancelEditData = new EventEmitter<string>();


  constructor(private fb: FormBuilder) {
    FormEditTypeContactComponent.componentCount++;
    this.identifier = FormEditTypeContactComponent.componentCount;
  }

  ngOnInit() {
    this.typeContactForm = this.fb.group({
      contact: ['', [Validators.required, Validators.pattern('[A-Za-zÀ-ú]{3,}[A-Za-zÀ-ú ]*'), this.validateDuplicate.bind(this)]],
      contactIcon: ['', [Validators.pattern('(fas|fab|far) fa-[0-9a-z\-]+')]]
    });
    this.contactCtrl = this.typeContactForm.get('contact') as FormControl;
    this.typeContactForm.patchValue(this.typeContact);
    console.log(this.typeContactForm.controls);
    console.log('FormEditTypeContactComponent - ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.typeContact && this.typeContactForm) {
      this.typeContactForm.patchValue(this.typeContact);
    }
  }

  submitForm() {
    this.submitData.emit(new TypeContact(this.typeContactForm.value));
  }

  cancelEdit() {
    if (!this.insertMode) {
      this.cancelEditData.emit('cancel');
    }
  }

  validateDuplicate(control: AbstractControl) {
    if (!this.typeContactCollection) {
      return null;
    }
    const idx = this.typeContactCollection.indexOf(control.value);
    if (idx === -1) {
      return null;
    }
    if (this.insertMode) {
      return { duplicateItem: true };
    }
    return (this.typeContact.numTypeContact !== this.typeContactCollection.items[idx].numTypeContact) ? { duplicateItem: true } : null;
  }

}
