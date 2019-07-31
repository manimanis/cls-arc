import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideRechercheComponent } from './aide-recherche.component';

describe('AideRechercheComponent', () => {
  let component: AideRechercheComponent;
  let fixture: ComponentFixture<AideRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
