import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecordComponent} from './record/record.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'record', component: RecordComponent },
  { path: '', component: RecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , HttpClientModule , BrowserModule],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [ RecordComponent ]

})




// @ts-ignore
export class AppRoutingModule { }

