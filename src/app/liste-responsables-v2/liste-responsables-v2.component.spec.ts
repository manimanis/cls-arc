import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResponsablesV2Component } from './liste-responsables-v2.component';

describe('ListeResponsablesV2Component', () => {
  let component: ListeResponsablesV2Component;
  let fixture: ComponentFixture<ListeResponsablesV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeResponsablesV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeResponsablesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
