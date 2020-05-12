import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';
import { skip } from 'rxjs/operators';
import { CheckboxFormatterComponent } from './checkbox-formatter.component';
import { GridNodeMock, GridApiMock } from '../../../../../models/mocks.models';

describe('CheckboxFormatterComponent', () => {
  let component: CheckboxFormatterComponent;
  let fixture: ComponentFixture<CheckboxFormatterComponent>;
  let node: GridNodeMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    node = new GridNodeMock();
  });

  it('should create CheckboxFormatterComponent', () => {
    expect(component).toBeDefined();
  });

  it('onStateChange with true param change node state', () => {
    component.agInit({ node } as object as ICellRendererParams);
    component.onStateChange(true);
    expect(node.isSelected()).toBeTrue();
  });

  it('checkboxState$ should has initial state', (done: DoneFn) => {
    const api = new GridApiMock();
    component.agInit({ api, node } as object as ICellRendererParams);
    component.checkboxState$.subscribe(selectionState => {
      expect(selectionState).toBeFalse();
      done();
    });
  });

  it('checkboxState$ should update state on event', (done: DoneFn) => {
    const api = new GridApiMock();
    node.setSelected(true);

    component.agInit({ api, node } as object as ICellRendererParams);

    component.checkboxState$.pipe(skip(1)).subscribe(selectionState => {
      expect(selectionState).toBeTrue();
      done();
    });

    api.selectionChanged.next();
  });
});
