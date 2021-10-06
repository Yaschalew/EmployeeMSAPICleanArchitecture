import { Component, OnInit } from '@angular/core';

import { Attendance } from '../models/attendance.model';
import { AttendanceService } from './../services/attendance.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.scss']
})
export class AttendancesComponent implements OnInit {



  displayedColumns: string[] = ['no', 'employee', 'loginTime', 'logoutTime', 'loginDescription', 'loginDescription', 'remark', 'action'];
  dataSource: any;
  attendances: Attendance[] = [];
  // $attendances: Observable<AttendanceState>
  employees: any[] = []
  id: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private attendanceService: AttendanceService,
    // private _attendanceStateService: AttendanceStateService
  ) {

    // this.$attendances = this._attendanceStateService.state$

    // this.$attendances.subscribe((response: any) => {
    //   console.log(response)
    // })
    // let date: Date
    // date = new Date(2021, 8, 30, 9, 0, 0, 0)
    // console.log(date,' => ', date.getTime())
    // date = new Date(2021, 8, 30, 18, 0, 0, 0)
    // console.log(date,' => ', date.getTime())
    this.attendanceService.getAll()
      .subscribe((data: any) => {
        console.log('Attendances')
        this.attendances = data
        console.log(this.attendances)
      });
    this.attendanceService.getEmployees()
      .subscribe((data) => {
        console.log('Employees')
        this.employees = data
        console.log(this.employees)
      });

  }

  ngOnInit(): void { }

  openDialog(id: any) {

  }

  getDate(time: number): Date{
    return new Date(time)
  }

  getEmployeeName(employeeId: number) {
    // return 'XYZ'
    return this.attendanceService.getEmployeeName(employeeId)
  }


  // openDialog(id:string): void {
  //   const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
  //     width: '250px',
  //     data: {id:id}
  //   });
  //   this.id=id;
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     if(result){
  //       this._employees.deleteEmployee(this.id).subscribe(data=>{
  //         location.reload();
  //         console.log(data);

  //       })
  //       this._snackBar.open("Employee is deleted.","Ok");
  //       location.reload();
  //     }

  //    // this.animal = result;
  //   });
  // }

}
