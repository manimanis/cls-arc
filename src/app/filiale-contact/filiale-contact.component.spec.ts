import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialeContactComponent } from './filiale-contact.component';

describe('FilialeContactComponent', () => {
  let component: FilialeContactComponent;
  let fixture: ComponentFixture<FilialeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
