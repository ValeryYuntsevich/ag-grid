import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',  component: AgGridComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
