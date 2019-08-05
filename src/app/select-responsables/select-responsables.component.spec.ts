import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResponsablesComponent } from './select-responsables.component';

describe('SelectResponsablesComponent', () => {
  let component: SelectResponsablesComponent;
  let fixture: ComponentFixture<SelectResponsablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectResponsablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
