import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/models/video.model';
import { ImageFormatterComponent } from './image-formatter/image-formatter.component';
import { DateFormatterComponent } from './date-formatter/date-formatter.component';
import { Observable } from 'rxjs';

import { ButtonSelectionComponent } from './side-bar/button-selection/button-selection.component';
import { RecordsSelectionComponent } from './side-bar/records-selection/records-selection.component';
import { TotalRecordsComponent } from './side-bar/total-records/total-records.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxHeaderComponent } from './checkbox-header/checkbox-header.component';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

statusBar = {
  statusPanels: [
    { statusPanel: 'buttonSelectionComponent', align: 'left' },
    { statusPanel: 'recordsSelectionComponent', align: 'right' },
    { statusPanel: 'totalRecordsComponent', align: 'right' }
  ]
};

frameworkComponents = {
  buttonSelectionComponent: ButtonSelectionComponent,
  recordsSelectionComponent: RecordsSelectionComponent,
  totalRecordsComponent: TotalRecordsComponent
 };

 gridOptions = {
  getContextMenuItems: (params) => this.getContextMenuItems(params),
};

  rowData: Observable<Video[]>;

  columnDefs = [
    {
        headerName: '',
        field: 'checkbox',
        width: 30,
        suppressSizeToFit: true,
        cellStyle: { 'justify-content': 'center' },
        hide: true,
        cellRendererFramework: CheckboxComponent,
        headerComponentFramework: CheckboxHeaderComponent},
    {
      headerName: '',
      field: 'thumbnailVideo',
      autoHeight: true,
      suppressSizeToFit: true,
      cellRendererFramework: ImageFormatterComponent
    },

    {
      headerName: 'published',
      field: 'publishedAtVideo',
      autoHeight: true,
      suppressSizeToFit: true,
      cellRendererFramework: DateFormatterComponent
    },

    {
      headerName: 'title',
      field: 'titleVideo',
      colId: 'title',
      maxWidth: 300,
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
    },

    {
      headerName: 'description',
      field: 'descriptionVideo',
      colId: 'description',
      maxWidth: 300,
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
    }
];

  constructor(private video: VideoService) { }

  ngOnInit(): void {
    this.rowData = this.video.getVideo();
   }

   getContextMenuItems(params) {
    const url = this.video.getUrlById(params.node.data.idVideo);
    const result = [
      {
        name: 'Open video in new tab',
        action: () => {
          window.open(url, '_blank');
        },
        icon: `<span class="ag-icon ag-icon-linked"></span>`,
      },
      'copy',
    ];
    return result;
  }

  onFirstDataRendered(params) {
    params.columnApi.autoSizeColumns(['title', 'description']);
  }
}
