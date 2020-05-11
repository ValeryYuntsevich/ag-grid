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
  public params: ICellRendererParams;
  public checkboxState$: Observable<boolean>;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.checkboxState$ = fromEvent(this.params.api, 'selectionChanged')
    .pipe(
        map(() => this.params.node.isSelected()),
        startWith(this.params.node.isSelected()),
    );
  }

  public onStateChange(checkboxState): void {
    const isSelected = checkboxState.target.checked;
    this.params.node.setSelected(isSelected);
  }
}
