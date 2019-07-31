import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditResponsableComponent } from './form-edit-responsable.component';

describe('FormEditResponsableComponent', () => {
  let component: FormEditResponsableComponent;
  let fixture: ComponentFixture<FormEditResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
