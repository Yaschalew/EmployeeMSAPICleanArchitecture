import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, async } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { AttendanceModel } from 'src/app/models/attendance.model';
import { AttendanceStateService } from '../state-management/attendances.state.service';
import { EmployeeNameModel } from 'src/app/models/employees.model';
import { EmployeesStateService } from '../state-management/employees.state.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-my-attendance-form',
  templateUrl: './my-attendance-form.component.html',
  styleUrls: ['./my-attendance-form.component.scss']
})
export class MyAttendanceFormComponent implements OnInit {

  employees: Observable<EmployeeNameModel[]>

  $attendance: Observable<AttendanceModel>
  // attendance: AttendanceModel = {} as AttendanceModel
  // attendanceForm: FormGroup


  constructor(
    private _attendanceStateService: AttendanceStateService,
    private _employeesStateService: EmployeesStateService,
    // private _fb: FormBuilder
  ) {
    this.employees = this._employeesStateService.getNames()
    this.$attendance = this._attendanceStateService.$selectedAttendance

    // this.$attendance.subscribe((result: AttendanceModel) => {
    //   console.log('Attendance Form')
    //   console.log(result)
    //   this.attendance = result
    // })

    // this.attendanceForm = this._fb.group({
    //   employee: new FormControl(''),
    //   login: this._fb.group({
    //     loginDateTime: new FormControl(new Date()),
    //     loginDescription: new FormControl('')
    //   }),
    //   logout: this._fb.group({
    //     logoutDateTime: new FormControl(new Date()),
    //     logoutDescription: new FormControl('')
    //   }),
    //   remark: new FormControl('')
    // })
  }

  ngOnInit(): void {


    // delay(2000)
    // this.attendanceForm = this._fb.group({
    //   employee: new FormControl(this.attendance.employee),
    //   login: this._fb.group({
    //     loginDateTime: new FormControl(this.attendance.loginDateTime),
    //     loginDescription: new FormControl(this.attendance.loginDescription)
    //   }),
    //   logout: this._fb.group({
    //     logoutDateTime: new FormControl(this.attendance.logoutDateTime),
    //     logoutDescription: new FormControl(this.attendance.logoutDescription)
    //   }),
    //   remark: new FormControl(this.attendance.remark)
    // })
  }

  // ngOnInit(): void {
  //   this.attendanceForm = this._fb.group({
  //     employee: new FormControl(this.$attendance.pipe(map((att: AttendanceModel) => {return att.employee}))),
  //     login: this._fb.group({
  //       DateTime: new FormControl(this.$attendance.pipe(map((att: AttendanceModel) => {return att.loginDateTime}))),
  //       Description: new FormControl(this.$attendance.pipe(map((att: AttendanceModel) => {return att.loginDescription})))
  //     }),
  //     logout: this._fb.group({
  //       DateTime: new FormControl(this.$attendance.pipe(map((att: AttendanceModel) => {return att.logoutDateTime}))),
  //       Description: new FormControl(this.$attendance.pipe(map((att: AttendanceModel) => {return att.logoutDescription})))
  //     }),
  //     remark: new FormControl(this.$attendance.pipe(map((att: AttendanceModel) => {return att.remark})))
  //   })
  // }

  onSubmit(){
    let data: any
    this.$attendance.subscribe((att: AttendanceModel) =>{
      data = att
    })
    console.log(data)
    let data1: any
    this._attendanceStateService.$newAttendance.subscribe((att: AttendanceModel) =>{
      data1 = att
    })
    console.log(data1)
  }

}
