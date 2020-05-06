import { ColDef } from 'ag-grid-community';

import {
  CheckboxFormatterComponent,
  DateFormatterComponent,
  DescriptionFormatterComponent,
  ImageFormatterComponent,
  TitleFormatterComponent,
  CheckboxHeaderComponent
} from '.';

export const gridColumns: ColDef[] = [
  {
    headerName: '',
    field: 'checkbox',
    width: 30,
    suppressSizeToFit: true,
    cellStyle: { 'justify-content': 'center' },
    hide: true,
    colId: 'checkbox',
    cellRendererFramework: CheckboxFormatterComponent,
    headerComponentFramework: CheckboxHeaderComponent
  },
  {
    headerName: '',
    field: 'thumbnailVideo',
    autoHeight: true,
    suppressSizeToFit: true,
    cellRendererFramework: ImageFormatterComponent
  },
  {
    headerName: 'Published at',
    field: 'publishedAtVideo',
    autoHeight: true,
    suppressSizeToFit: true,
    cellRendererFramework: DateFormatterComponent
  },
  {
    headerName: 'Title',
    field: 'titleVideo',
    colId: 'title',
    maxWidth: 300,
    autoHeight: true,
    cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
    cellRendererFramework: TitleFormatterComponent,
  },
  {
    headerName: 'Description',
    field: 'descriptionVideo',
    colId: 'description',
    maxWidth: 300,
    autoHeight: true,
    cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
    cellRendererFramework: DescriptionFormatterComponent,
  }
];
