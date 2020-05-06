import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { Observable, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-checkbox-formatter',
  templateUrl: './checkbox-formatter.component.html',
  styleUrls: ['./checkbox-formatter.component.scss']
})
export class CheckboxFormatterComponent {
  public value: ICellRendererParams;
  public checkboxState$: Observable<boolean>;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.value = params;
    this.checkboxState$ = fromEvent(this.value.api, 'selectionChanged')
    .pipe(
        map(() => this.value.node.isSelected()),
        startWith(this.value.node.isSelected()),
    );
  }
}
