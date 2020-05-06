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
  public value: ICellRendererParams;
  public total$: Observable<number>;

  constructor() { }

  public agInit(params: ICellRendererParams){
    this.value = params;
    this.total$ = fromEvent(this.value.api, 'selectionChanged')
    .pipe(
      map(() => this.value.api.getSelectedNodes().length),
      startWith(0),
    );
  }

}
