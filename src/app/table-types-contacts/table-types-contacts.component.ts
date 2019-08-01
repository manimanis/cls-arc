import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { TypeContact } from '../shared/type-contact';

@Component({
  selector: 'table-types-contacts',
  templateUrl: './table-types-contacts.component.html',
  styleUrls: ['./table-types-contacts.component.css']
})
export class TableTypesContactsComponent implements OnInit {

  @Input() contactsTypes = new TypeContactCollection();

  @Input() canEdit = true;
  @Input() canDelete = true;
  @Input() canReorder = true;

  @Input() affectedIds = [];
  @Input() notAffectedIds = [];

  @Output() editButtonClicked = new EventEmitter<TypeContact>();
  @Output() deleteButtonClicked = new EventEmitter<TypeContact>();
  @Output() reorderButtonClicked = new EventEmitter<TypeContact>();

  constructor() { }

  ngOnInit() {
  }

}
