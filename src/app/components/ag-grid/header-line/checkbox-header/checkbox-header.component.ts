import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss']
})

export class CheckboxHeaderComponent {
  public value: ICellRendererParams;
  public checkboxState$: Observable<boolean>;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.value = params;
    this.checkboxState$ = fromEvent(this.value.api, 'selectionChanged')
    .pipe(
      map(() => params.api.getDisplayedRowCount() === this.value.api.getSelectedRows().length),
      startWith(false),
    );
  }

  public valueChanged(status: boolean): void {
    if (status) {
      this.value.api.selectAll();
    } else {
      this.value.api.deselectAll();
    }
  }
}
