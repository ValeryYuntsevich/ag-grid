import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { AG_GRID_COMPONENTS } from './components/ag-grid';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ...AG_GRID_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([...AG_GRID_COMPONENTS])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
