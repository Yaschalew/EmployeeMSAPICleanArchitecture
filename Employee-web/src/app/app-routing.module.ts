import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
{ path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
{ path: 'educations', loadChildren: () => import('./educations/educations.module').then(m => m.EducationsModule) },
{ path: 'experiences', loadChildren: () => import('./experiences/experiences.module').then(m => m.ExperiencesModule) },
{ path: 'Positions', loadChildren: () => import('./positions/positions.module').then(m => m.PositionsModule)},
 { path: 'jobInfos', loadChildren: () => import('./job-infos/job-infos.module').then(m => m.JobInfosModule) },
{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
