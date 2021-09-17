import { Component, OnInit } from '@angular/core';

import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['roNo','fname','lname','mname','birthDate', 'phone', 'email','address','hiredAt','status','action'];
  dataSource : any;
id:any;
  constructor(private _snackBar: MatSnackBar,private _employees:EmployeeService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this._employees.getEmployees().subscribe((data:any)=>{
      this.dataSource=data.employees;
    });
  }

  openDialog(id:string): void {
    const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
      width: '250px',
      data: {id:id}
    });
    this.id=id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this._employees.deleteEmployee(this.id).subscribe(data=>{
          location.reload();
          console.log(data);

        })
        this._snackBar.open("Employee is deleted.","Ok");
        location.reload();
      }

     // this.animal = result;
    });
  }


}
