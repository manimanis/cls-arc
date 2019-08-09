import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditFilialeComponent } from './form-edit-filiale.component';

describe('FormEditFilialeComponent', () => {
  let component: FormEditFilialeComponent;
  let fixture: ComponentFixture<FormEditFilialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditFilialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditFilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
