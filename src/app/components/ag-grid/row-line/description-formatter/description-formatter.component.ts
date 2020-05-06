import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-description-formatter',
  templateUrl: './description-formatter.component.html',
  styleUrls: ['./description-formatter.component.scss']
})

export class DescriptionFormatterComponent {
  public description: string;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.description = params.value;
  }
}
