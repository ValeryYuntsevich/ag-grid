import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordsSelectionComponent } from './records-selection.component';

describe('RecordsSelectionComponent', () => {
  let component: RecordsSelectionComponent;
  let fixture: ComponentFixture<RecordsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create RecordsSelectionComponent', () => {
    expect(component).toBeDefined();
  });
});
