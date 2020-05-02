import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkBox: boolean = false;
  params: any;

  constructor(private video: VideoService) { }

  ngOnInit(): void {
    this.video.checkBox.subscribe(data => {
      this.checkBox = data;
    });
  }

  agInit(params: any){
    this.params = params;
    fromEvent(params.api, 'selectionChanged').subscribe(ev => {
      this.checkBox = this.params.node.isSelected();
    });
  }
}