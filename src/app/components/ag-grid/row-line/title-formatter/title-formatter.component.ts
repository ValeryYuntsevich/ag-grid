import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-title-formatter',
  templateUrl: './title-formatter.component.html',
  styleUrls: ['./title-formatter.component.scss']
})

export class TitleFormatterComponent {
  public urlLink: string;
  public title: string;
  constructor(private video: VideoService) { }

  public agInit(params: ICellRendererParams): void {
    this.title = params.data.titleVideo;
    this.urlLink = this.video.getUrlById(params.data.idVideo);
  }
}
