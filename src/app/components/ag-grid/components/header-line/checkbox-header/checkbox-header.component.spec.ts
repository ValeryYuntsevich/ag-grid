import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { skip } from 'rxjs/operators';
import { CheckboxHeaderComponent } from './checkbox-header.component';
import { AG_GRID_COMPONENTS } from '../..';
import { GridApiMock, GridRow } from '../../../../../models/mocks.models';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AgGridModule.withComponents([...AG_GRID_COMPONENTS])],
      declarations: [ ...AG_GRID_COMPONENTS ]
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

  it('valueChanged with true param calls selectAll', () => {
    const gridRows: GridRow[] = [ { checked: true }, { checked: false } ];
    const api = new GridApiMock(gridRows);
    component.agInit({ api } as object as ICellRendererParams);
    component.valueChanged(true);
    expect(gridRows.every(row => row.checked)).toBeTrue();
  });

  it('valueChanged with false param calls deselectAll', () => {
    const gridRows: GridRow[] = [ { checked: true }, { checked: false } ];
    const api = new GridApiMock(gridRows);
    component.agInit({ api } as object as ICellRendererParams);
    component.valueChanged(false);
    expect(gridRows.every(row => !row.checked)).toBeTrue();
  });

  it('checkboxState$ has initial state as false', (done: DoneFn) => {
    const api = new GridApiMock();
    component.agInit({ api } as object as ICellRendererParams);
    component.checkboxState$.subscribe(selectionState => {
      expect(selectionState).toBeFalse();
      done();
    });
  });

  it('checkboxState$ return true if all selected', (done: DoneFn) => {
    const gridRows: GridRow[] = [ { checked: true }, { checked: false } ];
    const api = new GridApiMock(gridRows);
    component.agInit({ api } as object as ICellRendererParams);

    component.checkboxState$.pipe(skip(1)).subscribe(selectionState => {
      expect(selectionState).toBeFalse();
      done();
    });

    api.selectionChanged.next();
  });

  it('checkboxState$ return true if all selected', (done: DoneFn) => {
    const gridRows: GridRow[] = [ { checked: true }, { checked: true } ];
    const api = new GridApiMock(gridRows);
    component.agInit({ api } as object as ICellRendererParams);

    component.checkboxState$.pipe(skip(1)).subscribe(selectionState => {
      expect(selectionState).toBeTrue();
      done();
    });

    api.selectionChanged.next();
  });
});
