import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {
  @Input() routerLink = [''];
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onClick(event) {
    this.clicked.emit(event);
  }

  ngOnInit() {
  }

}
