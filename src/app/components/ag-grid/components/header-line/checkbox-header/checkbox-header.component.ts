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
  public params: ICellRendererParams;
  public checkboxState$: Observable<boolean>;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.checkboxState$ = fromEvent(this.params.api, 'selectionChanged')
    .pipe(
      map(() => this.params.api.getDisplayedRowCount() === this.params.api.getSelectedRows().length),
      startWith(false),
    );
  }

  public valueChanged(status: boolean): void {
    if (status) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
