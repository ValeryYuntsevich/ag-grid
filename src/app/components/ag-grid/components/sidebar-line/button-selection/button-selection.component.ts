import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-selection',
  templateUrl: './button-selection.component.html',
  styleUrls: ['./button-selection.component.scss']
})

export class ButtonSelectionComponent {

  public params: ICellRendererParams;
  public show: boolean;

  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  public showSelectionMode(): void {
    this.show = !this.show;
    this.params.columnApi.setColumnVisible('checkbox', this.show);
    if (!this.show) {
      this.params.api.deselectAll();
    }
  }
}
