import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeFilialesComponent } from './liste-filiales.component';


describe('ListeFilialesComponent', () => {
  let component: ListeFilialesComponent;
  let fixture: ComponentFixture<ListeFilialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFilialesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFilialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
