import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Attendance } from 'src/app/models/attendance.model';
import { AttendanceService } from './../../services/attendance.service';
import { DatePipe } from '@angular/common';
import { Employee } from 'src/app/models/employees.model';

// import {EventEmitter} from 'events';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {

  @Output() reply = new EventEmitter<Attendance>()

  @Input() attendance: Attendance | undefined

  employees: Employee[] = []
  loginDateTime: Date | undefined

  forms: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _attendanceService: AttendanceService
  ) {
    this.forms = this._fb.group({
      employee: '',
      loginDate: '',
      loginHour: '',
      loginMinute: '',
      loginDescription: '',
      logoutDate: '',
      logoutHour: '',
      logoutMinute: '',
      logoutDescription: '',
      remark: ''
    })
    this._attendanceService.getEmployees()
    .subscribe((data: any) => {
      this.employees = data
    })
  }

  ngOnInit(): void {
    console.log(this.attendance)

    if(this.attendance !== undefined){
      this.loginDateTime = new Date(this.attendance.loginDateTime)
      let login = new Date(this.attendance.loginDateTime)

      let logout = new Date(this.attendance.logoutDateTime)
      this.forms = this._fb.group({
        employee: this._attendanceService.getEmployeeName(this.attendance.employee),
        loginDate: new Date(login.getFullYear(), login.getMonth(), login.getDate()),
        loginHour: login.getHours(),
        loginMinute: login.getMinutes(),
        loginDescription: this.attendance.loginDescription,
        logoutDate: '',
        logoutHour: '',
        logoutMinute: '',
        logoutDescription: '',
        remark: ''
      })
    }

  }

  numLists(min: number, max: number) {
    let list: number[] = []
    for (let i = min; i <= max; i++) {
      list = [...list, i]
    }
    return list
  }

  onSubmit() {
    this.reply.emit(this.attendance)
  }

}
