import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilialeComponent } from './edit-filiale.component';

describe('EditFilialeComponent', () => {
  let component: EditFilialeComponent;
  let fixture: ComponentFixture<EditFilialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFilialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
