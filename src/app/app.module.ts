import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { ImageFormatterComponent } from './components/ag-grid/image-formatter/image-formatter.component';
import { DateFormatterComponent } from './components/ag-grid/date-formatter/date-formatter.component';
import { ButtonSelectionComponent } from './components/ag-grid/side-bar/button-selection/button-selection.component';
import { RecordsSelectionComponent } from './components/ag-grid/side-bar/records-selection/records-selection.component';
import { TotalRecordsComponent } from './components/ag-grid/side-bar/total-records/total-records.component';
import { CheckboxComponent } from './components/ag-grid/checkbox/checkbox.component';
import { CheckboxHeaderComponent } from './components/ag-grid/checkbox-header/checkbox-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ImageFormatterComponent,
    DateFormatterComponent,
    ButtonSelectionComponent,
    RecordsSelectionComponent,
    TotalRecordsComponent,
    CheckboxComponent,
    CheckboxHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([
      ImageFormatterComponent,
      DateFormatterComponent,
      ButtonSelectionComponent,
      RecordsSelectionComponent,
      TotalRecordsComponent,
      CheckboxComponent,
      CheckboxHeaderComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
