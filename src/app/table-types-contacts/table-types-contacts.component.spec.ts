import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTypesContactsComponent } from './table-types-contacts.component';

describe('TableTypesContactsComponent', () => {
  let component: TableTypesContactsComponent;
  let fixture: ComponentFixture<TableTypesContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTypesContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTypesContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
