import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateFormatterComponent } from './date-formatter.component';
import { By } from '@angular/platform-browser';
import { ICellRendererParams } from 'ag-grid-community';

describe('DateFormatterComponent', () => {
  let component: DateFormatterComponent;
  let fixture: ComponentFixture<DateFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DateFormatterComponent', () => {
    expect(component).toBeDefined();
  });

  it('check date | pipe', async(() => {
    fixture.componentInstance.date = '2020-04-26T13:00:33.000Z';
    fixture.detectChanges();
    const date = fixture.debugElement.query(By.css('p'));
    expect(date.nativeElement.innerText).toBe('26-04-2020');
  }));

  it('check agInit()', async(() => {
    component.agInit({ value: '2020-04-26T13:00:33.000Z' } as ICellRendererParams);
    fixture.detectChanges();
    const description = fixture.debugElement.query(By.css('p'));
    expect(description.nativeElement.innerText).toBe('26-04-2020');
  }));
});
