import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
{ path: '', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
{ path: 'educations', loadChildren: () => import('./educations/educations.module').then(m => m.EducationsModule) },
{ path: 'experiences', loadChildren: () => import('./experiences/experiences.module').then(m => m.ExperiencesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
