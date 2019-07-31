import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialesListComponent } from './filiales-list.component';

describe('FilialesListComponent', () => {
  let component: FilialesListComponent;
  let fixture: ComponentFixture<FilialesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
