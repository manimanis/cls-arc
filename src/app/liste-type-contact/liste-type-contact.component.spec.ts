import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeContactComponent } from './liste-type-contact.component';

describe('ListeTypeContactComponent', () => {
  let component: ListeTypeContactComponent;
  let fixture: ComponentFixture<ListeTypeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTypeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
