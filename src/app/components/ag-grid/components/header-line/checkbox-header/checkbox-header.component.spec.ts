import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxHeaderComponent } from './checkbox-header.component';
import { AgGridModule } from 'ag-grid-angular';
import { AG_GRID_COMPONENTS } from '../..';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AgGridModule.withComponents([...AG_GRID_COMPONENTS])],
      declarations: [ CheckboxHeaderComponent, ...AG_GRID_COMPONENTS ]
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
});
