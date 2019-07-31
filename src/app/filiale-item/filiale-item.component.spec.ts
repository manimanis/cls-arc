import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialeItemComponent } from './filiale-item.component';

describe('FilialeItemComponent', () => {
  let component: FilialeItemComponent;
  let fixture: ComponentFixture<FilialeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
