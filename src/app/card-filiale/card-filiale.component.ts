import { Component, OnInit, Input } from '@angular/core';
import { Filiale } from '../shared/filiale';

@Component({
  selector: 'card-filiale',
  templateUrl: './card-filiale.component.html',
  styleUrls: ['./card-filiale.component.css']
})
export class CardFilialeComponent implements OnInit {

  @Input() filiale: Filiale;
  @Input() contactsVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleContactsVisible() {
    this.contactsVisible = !this.contactsVisible;
  }

  buttonColumnClass() {
    if (this.filiale.salles.length <= 4) {
      return 'col-sm';
    }
    return 'col-3';
  }
}
