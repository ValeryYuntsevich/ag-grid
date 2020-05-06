import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-total-records',
  templateUrl: './total-records.component.html',
  styleUrls: ['./total-records.component.scss']
})

export class TotalRecordsComponent {
  public value: ICellRendererParams;
  public highLighterRows$: Observable<number>;

  constructor() { }

  public agInit(params: ICellRendererParams) {
    this.value = params;
    this.highLighterRows$ = fromEvent(this.value.api, 'modelUpdated')
    .pipe(
        map(() => this.value.api.getDisplayedRowCount()),
        startWith(0),
    );
  }
}
