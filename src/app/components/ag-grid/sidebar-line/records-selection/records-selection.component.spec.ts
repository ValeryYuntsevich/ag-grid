import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordsSelectionComponent } from './records-selection.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

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

  it('check setting total$', () => {
    const value$ = of(5);
    component.total$ = value$;
    fixture.detectChanges();
    const records = fixture.debugElement.query(By.css('span'));
    expect(records.nativeElement.innerText).toBe('Selected records: 5');
  });
});
