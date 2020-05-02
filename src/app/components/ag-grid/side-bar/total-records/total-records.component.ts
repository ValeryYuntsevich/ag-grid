import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-total-records',
  templateUrl: './total-records.component.html',
  styleUrls: ['./total-records.component.scss']
})
export class TotalRecordsComponent implements OnInit {

  params: any;
  count: number = 0;

  constructor() { }

  ngOnInit(): void { }

  agInit(params: any){
    this.params = params;
    fromEvent(this.params.api, 'modelUpdated').subscribe(ev =>
      this.count = this.params.api.getDisplayedRowCount());
  }
}
