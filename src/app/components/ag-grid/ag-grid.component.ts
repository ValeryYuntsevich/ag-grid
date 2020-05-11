import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { Observable } from 'rxjs';
import { ICellRendererParams, MenuItemDef } from 'ag-grid-community';
import { VideoService } from 'src/app/services/video-service/video.service';
import { PageService } from 'src/app/services/page-service/page.service';
import { gridColumns } from './definition.column';
import { statusPanels } from './sidebar.panels';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})

export class AgGridComponent implements OnInit {

  public rowData: Observable<Video[]>;
  public statusBar = { statusPanels };
  public columnDefs = gridColumns;

  public gridOptions = {
    getContextMenuItems: (params: ICellRendererParams) => this.getContextMenuItems(params),
  };

  constructor(private video: VideoService, private page: PageService) { }

  public ngOnInit(): void {
    this.rowData = this.video.getVideo();
  }

  public getContextMenuItems(params: ICellRendererParams): MenuItemDef[]  {
    const link = this.video.getUrlById(params.node.data.idVideo);
    const result = [
      {
        name: 'Open video in new tab',
        action: () => {
          this.page.openInNewTab(link);
        },
        icon: `<span class="ag-icon ag-icon-linked"></span>`,
      },
    ];
    return result;
  }

  public onFirstDataRendered(params: ICellRendererParams): void {
    params.columnApi.autoSizeColumns(['title', 'description']);
  }
}
