import { RouterModule, Routes } from '@angular/router';

import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { AttendancesComponent } from './attendances.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: AttendancesComponent },
  { path: 'attendance-add', component: AttendanceAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendancesRoutingModule { }
