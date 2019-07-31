import { Component, OnInit, Input } from '@angular/core';
import { Filiale } from '../shared/filiale';

@Component({
  selector: 'filiale-item',
  templateUrl: './filiale-item.component.html',
  styleUrls: ['./filiale-item.component.css']
})
export class FilialeItemComponent implements OnInit {
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
