import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobInfosRoutingModule } from './job-infos-routing.module';
import { JobInfosComponent } from './job-infos.component';
import { JobAddComponent } from './job-add/job-add.component';


@NgModule({
  declarations: [
    JobInfosComponent,
    JobAddComponent
  ],
  imports: [
    CommonModule,
    JobInfosRoutingModule
  ]
})
export class JobInfosModule { }
