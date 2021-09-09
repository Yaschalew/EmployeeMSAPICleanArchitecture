import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAddComponent } from './job-add/job-add.component';
import { JobInfosComponent } from './job-infos.component';

const routes: Routes = [
  { path: '', component: JobInfosComponent },
  {path:"job-add",component:JobAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobInfosRoutingModule { }
