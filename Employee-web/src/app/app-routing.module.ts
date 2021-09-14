import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }, 
{ path: 'Positions', loadChildren: () => import('./positions/positions.module').then(m => m.PositionsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
