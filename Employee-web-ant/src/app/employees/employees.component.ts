import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
employees:any;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe((data:any)=>{
      this.employees=data.employees;
    }

    );
  }

}
