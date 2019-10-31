import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { NewCompanyComponent } from './company/new-company/new-company.component';


@NgModule({
  declarations: [
    AppComponent,
    ListJobsComponent,
    NewJobComponent,
    ListCompanyComponent,
    NewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
