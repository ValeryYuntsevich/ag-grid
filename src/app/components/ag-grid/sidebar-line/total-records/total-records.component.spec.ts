import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRecordsComponent } from './total-records.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TotalRecordsComponent', () => {
  let component: TotalRecordsComponent;
  let fixture: ComponentFixture<TotalRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TotalRecordsComponent', () => {
    expect(component).toBeDefined();
  });

  it('check setting highLighterRows$', () => {
    const value$ = of(5);
    component.highLighterRows$ = value$;
    fixture.detectChanges();
    const records = fixture.debugElement.query(By.css('span'));
    expect(records.nativeElement.innerText).toBe('Total: 5');
  });
});
