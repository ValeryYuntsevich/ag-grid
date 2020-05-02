import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-formatter',
  templateUrl: './date-formatter.component.html',
  styleUrls: ['./date-formatter.component.scss']
})

export class DateFormatterComponent implements OnInit {
  params: any;
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: any){
    this.params = params.value;
  }

}
