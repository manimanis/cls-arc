import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeContactComponent } from './edit-type-contact.component';

describe('EditTypeContactComponent', () => {
  let component: EditTypeContactComponent;
  let fixture: ComponentFixture<EditTypeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
