import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
employeesList:any;
  constructor(private _employees:EmployeeService) { }

  ngOnInit(): void {
    this._employees.getEmployees().subscribe((data:any)=>{
      this.employeesList=data.employees;
      console.log(this.employeesList);
    });
  }

}
