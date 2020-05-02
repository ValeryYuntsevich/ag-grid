import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-records-selection',
  templateUrl: './records-selection.component.html',
  styleUrls: ['./records-selection.component.scss']
})

export class RecordsSelectionComponent implements OnInit {

  params: any;
  count: number = 0;

  constructor() { }

  ngOnInit(): void { }

  agInit(params: any){
    this.params = params;
    fromEvent(this.params.api, 'selectionChanged').subscribe(ev =>
      this.count = this.params.api.getSelectedNodes().length);
  }
}
