import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxHeaderComponent } from './checkbox-header.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CheckboxHeaderComponent', () => {
    expect(component).toBeDefined();
  });

  it('check checkbox', () => {
    const checkbox = fixture.debugElement.query(By.css('input'));
    checkbox.nativeElement.checked = true;
    expect(checkbox.nativeElement.checked).toBeTrue();
    checkbox.nativeElement.checked = false;
    expect(checkbox.nativeElement.checked).toBeFalse();
  });

  it('check checkboxState$', () => {
    const value$ = of(false, true);
    component.checkboxState$ = value$.pipe(map((vl, i) => {
      return vl === false;
    }));
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.checked).toBe(false);

    component.checkboxState$ = value$.pipe(map((vl, i) => {
      return vl === true;
    }));
    fixture.detectChanges();
    expect(input.nativeElement.checked).toBe(true);
  });
});
