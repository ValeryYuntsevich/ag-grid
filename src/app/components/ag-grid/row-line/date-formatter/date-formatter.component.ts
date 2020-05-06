import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-date-formatter',
  templateUrl: './date-formatter.component.html',
  styleUrls: ['./date-formatter.component.scss']
})

export class DateFormatterComponent {
  public date: string;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.date = params.value;
  }
}
