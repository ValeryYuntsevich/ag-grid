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
  public params: ICellRendererParams;
  public total$: Observable<number>;

  constructor() { }

  public agInit(params: ICellRendererParams) {
    this.params = params;
    this.total$ = fromEvent(this.params.api, 'modelUpdated')
    .pipe(
        map(() => this.params.api.getDisplayedRowCount()),
        startWith(0),
    );
  }
}
