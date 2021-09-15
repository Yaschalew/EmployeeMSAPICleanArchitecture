import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { 
    path: '', component: EmployeesComponent 
},
{
  path:'add-employee',component : EmployeeAddComponent
},
{
  path:'edit-employee/:id',component : EmployeeEditComponent
},
{
  path:'detail-employee/:id',component : EmployeeDetailComponent
},
{
  path:'delete-employee/:id',component : EmployeeDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
