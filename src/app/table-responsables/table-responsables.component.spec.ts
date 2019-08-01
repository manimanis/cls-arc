import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResponsablesComponent } from './table-responsables.component';

describe('TableResponsablesComponent', () => {
  let component: TableResponsablesComponent;
  let fixture: ComponentFixture<TableResponsablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableResponsablesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
