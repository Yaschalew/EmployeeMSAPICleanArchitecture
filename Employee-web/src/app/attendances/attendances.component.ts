import { Component, OnInit } from '@angular/core';

import { AttendanceService } from './../services/attendance.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.scss']
})
export class AttendancesComponent implements OnInit {

  displayedColumns: string[] = ['no','employee','loginTime', 'logoutTime', 'loginDescription', 'loginDescription', 'remark', 'action'];
  dataSource : any;
  attendances:any;
id:any;
  constructor(private _snackBar: MatSnackBar,private _attendanceService:AttendanceService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this._attendanceService.getAll().subscribe((response:any)=>{
      console.log(response.data);
      this.attendances = response.data;
      this.dataSource = response.data;
    });
  }
  openDialog(id: any){

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
