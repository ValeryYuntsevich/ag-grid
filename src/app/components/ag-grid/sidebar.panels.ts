import { StatusPanelDef } from 'ag-grid-community';
import { ButtonSelectionComponent, RecordsSelectionComponent, TotalRecordsComponent } from './components';

export const statusPanels: StatusPanelDef[] = [
    {
        statusPanelFramework: ButtonSelectionComponent,
        align: 'left',
    },
    {
        statusPanelFramework: RecordsSelectionComponent,
        align: 'right',
    },
    {
        statusPanelFramework: TotalRecordsComponent,
        align: 'right',
    },
];
