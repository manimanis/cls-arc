import { Component, OnInit, Input } from '@angular/core';
import { Filiale } from '../shared/filiale';
import { FilialesService } from '../services/filiales.service';

@Component({
  selector: 'liste-filiales',
  templateUrl: './liste-filiales.component.html',
  styleUrls: ['./liste-filiales.component.css']
})
export class ListeFilialesComponent implements OnInit {
  @Input() filiales: Filiale[] = [];

  constructor(private filialesService: FilialesService) { }

  addNewFiliale() {
    console.log('filiale');
  }

  ngOnInit() {
    this.filialesService.getFiliales().subscribe((data) => this.filiales = data, error => console.log(error));
  }

}
