import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordsSelectionComponent } from './records-selection.component';
import { GridApiMock } from 'src/app/models/mocks.models';
import { ICellRendererParams } from 'ag-grid-community';
import { skip } from 'rxjs/operators';

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

  it('selectedRowsCount$ should has initial state', (done: DoneFn) => {
    const api = new GridApiMock();
    component.agInit({ api } as object as ICellRendererParams);
    component.selectedRowsCount$.subscribe(selectedRowsCount => {
      expect(selectedRowsCount).toBe(0);
      done();
    });
  });

  it('selectedRowsCount$ should update state on event', (done: DoneFn) => {
    const api = new GridApiMock();

    component.agInit({ api } as object as ICellRendererParams);

    component.selectedRowsCount$.pipe(skip(1)).subscribe(selectedRowsCount => {
      expect(selectedRowsCount).toBe(api.getSelectedNodes().length);
      done();
    });

    api.selectionChanged.next();
  });
});
