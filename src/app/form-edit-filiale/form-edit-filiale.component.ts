import { Component, OnInit, Input } from '@angular/core';
import { Filiale } from '../shared/filiale';

@Component({
  selector: 'app-form-edit-filiale',
  templateUrl: './form-edit-filiale.component.html',
  styleUrls: ['./form-edit-filiale.component.css']
})
export class FormEditFilialeComponent implements OnInit {

  @Input() isNew = true;
  @Input() filiale: Filiale = new Filiale();

  constructor() { }

  ngOnInit() {
  }

}
