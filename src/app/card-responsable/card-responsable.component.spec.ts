import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResponsableComponent } from './card-responsable.component';

describe('CardResponsableComponent', () => {
  let component: CardResponsableComponent;
  let fixture: ComponentFixture<CardResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
