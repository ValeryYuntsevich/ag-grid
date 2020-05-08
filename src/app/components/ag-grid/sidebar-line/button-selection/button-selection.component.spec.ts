import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSelectionComponent } from './button-selection.component';
import { By } from '@angular/platform-browser';

describe('ButtonSelectionComponent', () => {
  let component: ButtonSelectionComponent;
  let fixture: ComponentFixture<ButtonSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ButtonSelectionComponent', () => {
    expect(component).toBeDefined();
  });

  it('check innerHTML in button', async(() => {
    component.show = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.innerHTML).toBe('hide');
    component.show = false;
    fixture.detectChanges();
    expect(button.nativeElement.innerHTML).toBe('show');
  }));
});
