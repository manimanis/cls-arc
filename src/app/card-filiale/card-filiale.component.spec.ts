import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilialeComponent } from './card-filiale.component';

describe('CardFilialeComponent', () => {
  let component: CardFilialeComponent;
  let fixture: ComponentFixture<CardFilialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardFilialeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
