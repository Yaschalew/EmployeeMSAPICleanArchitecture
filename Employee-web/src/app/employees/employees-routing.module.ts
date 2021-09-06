import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { 
    path: '', component: EmployeesComponent 
},
{
  path:'add-employee',component : EmployeeAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
