import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
  styleUrls: ['./image-formatter.component.scss']
})

export class ImageFormatterComponent {
  public imageLink: string;
  constructor() { }

  public agInit(params: ICellRendererParams): void {
    this.imageLink = params.value;
  }
}
