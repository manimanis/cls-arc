import { Component, OnInit, Input } from '@angular/core';
import { Filiale } from '../shared/filiale';
import { FilialesService } from '../services/filiales.service';

@Component({
  selector: 'filiales-list',
  templateUrl: './filiales-list.component.html',
  styleUrls: ['./filiales-list.component.css']
})
export class FilialesListComponent implements OnInit {
  @Input() filiales: Filiale[] = [];

  constructor(private filialesService: FilialesService) { }

  addNewFiliale() {
    console.log('filiale');
  }

  ngOnInit() {
    this.filialesService.getFiliales().subscribe((data) => this.filiales = data, error => console.log(error));
  }

}
