import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-select-responsables',
  templateUrl: './modal-select-responsables.component.html',
  styleUrls: ['./modal-select-responsables.component.css']
})
export class ModalSelectResponsablesComponent implements OnInit {

  static counter = 0;

  componentIndex: number;
  componentId: string;

  constructor() { }

  ngOnInit() {
    this.componentIndex = ++ModalSelectResponsablesComponent.counter;
    this.componentId = `modal-select-responsable${this.componentIndex}`;
  }

}
