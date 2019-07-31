import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSelectionResponsablesComponent } from './liste-selection-responsables.component';

describe('ListeSelectionResponsablesComponent', () => {
  let component: ListeSelectionResponsablesComponent;
  let fixture: ComponentFixture<ListeSelectionResponsablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSelectionResponsablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSelectionResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
