import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResponsablesComponent } from './liste-responsables.component';

describe('ListeResponsablesComponent', () => {
  let component: ListeResponsablesComponent;
  let fixture: ComponentFixture<ListeResponsablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeResponsablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
