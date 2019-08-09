import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectResponsablesComponent } from './modal-select-responsables.component';

describe('ModalSelectResponsablesComponent', () => {
  let component: ModalSelectResponsablesComponent;
  let fixture: ComponentFixture<ModalSelectResponsablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectResponsablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
