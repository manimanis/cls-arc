import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Input() helpDisplayed = false;

  @Output() searchPattenModified = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchStr: ['']
    });
    this.searchForm.get('searchStr').valueChanges
      .pipe(
        debounceTime(1000),
        throttleTime(100)
      )
      .subscribe(value => this.searchPattenModified.emit(value));
  }

  toggleHelp() {
    this.helpDisplayed = !this.helpDisplayed;
  }

}
