import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeesModule { }
