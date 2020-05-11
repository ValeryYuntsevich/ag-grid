import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ICellRendererParams } from 'ag-grid-community';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-records-selection',
  templateUrl: './records-selection.component.html',
  styleUrls: ['./records-selection.component.scss']
})

export class RecordsSelectionComponent {
  public params: ICellRendererParams;
  public selectedRowsCount$: Observable<number>;

  constructor() { }

  public agInit(params: ICellRendererParams){
    this.params = params;
    this.selectedRowsCount$ = fromEvent(this.params.api, 'selectionChanged')
    .pipe(
      map(() => this.params.api.getSelectedNodes().length),
      startWith(0),
    );
  }

}
