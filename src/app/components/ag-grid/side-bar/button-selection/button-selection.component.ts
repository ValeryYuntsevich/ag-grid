import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-button-selection',
  templateUrl: './button-selection.component.html',
  styleUrls: ['./button-selection.component.scss']
})

export class ButtonSelectionComponent implements OnInit {

  params: any;
  show: boolean = false;

  constructor(private video: VideoService) { }

  ngOnInit(): void {
  }

  agInit(params: any) {
    this.params = params;
  }
  
  showSelectionMode() {
    this.show = !this.show;
    if (!this.show) {
      this.params.columnApi.setColumnsVisible(['checkbox'], false);
      this.video.checkBox.next(false);
      this.video.checkBoxHeader.next(false);
      this.params.api.deselectAll();
    }
    if (this.show) {
      this.params.columnApi.setColumnsVisible(['checkbox'], true);
    }
  }
}