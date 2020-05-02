import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss']
})
export class CheckboxHeaderComponent implements OnInit {

  params: any;
  checked = false;
  checkBoxHeader;

  constructor(private video: VideoService) { }

  ngOnInit(): void {
    this.video.checkBoxHeader.subscribe(data => {
      this.checkBoxHeader = data;
    });
  }

  agInit(params: any): void {
    this.params = params;
    fromEvent(params.api, 'selectionChanged').subscribe(ev => {
      if (this.params.api.getSelectedNodes().length < this.params.api.getDisplayedRowCount() &&
        this.params.api.getSelectedNodes().length > 0){
        this.video.checkBoxHeader.next(false);
        this.checked = false;
      }
    });
  }

  valueChanged(event) {
    this.checked = !this.checked;
    if (this.checked) {
      this.params.api.selectAll();
      this.video.checkBox.next(true);
      this.video.checkBoxHeader.next(true);
    }
    if (!this.checked) {
      this.params.api.deselectAll();
      this.video.checkBox.next(false);
      this.video.checkBoxHeader.next(false);
    }
    this.params.api.refreshCells();
  }

}
