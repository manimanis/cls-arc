import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTypeContactComponent } from './form-edit-type-contact.component';

describe('FormEditTypeContactComponent', () => {
  let component: FormEditTypeContactComponent;
  let fixture: ComponentFixture<FormEditTypeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditTypeContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditTypeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
