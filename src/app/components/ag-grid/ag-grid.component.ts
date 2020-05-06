import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/models/video.model';
import { Observable } from 'rxjs';
import { statusPanels } from './sidebar-line/sidebar.panels';
import { gridColumns } from './definition.column';
import { ICellRendererParams, MenuItemDef, GridOptions } from 'ag-grid-community';
import { WindowService } from 'src/app/services/window.service';

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

  constructor(private video: VideoService, private window: WindowService) { }

  public ngOnInit(): void {
    this.rowData = this.video.getVideo();
  }

  public getContextMenuItems(params: ICellRendererParams): MenuItemDef[]  {
    const result = [
      {
        name: 'Open video in new tab',
        action: () => {
          this.window.openInNewTab(params.node.data.idVideo);
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
