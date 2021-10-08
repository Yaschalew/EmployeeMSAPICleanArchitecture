import { Attendance, AttendanceModel } from 'src/app/models/attendance.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AttendanceService } from './../../services/attendance.service';
import { DatePipe } from '@angular/common';
import { Employee } from 'src/app/models/employees.model';
import { Observable } from 'rxjs';

// import {EventEmitter} from 'events';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {

  @Output() reply = new EventEmitter<AttendanceModel>()

  @Input() attendance: AttendanceModel | undefined

  employees: Employee[] = []

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
      this.forms = this._fb.group({
        employee: this._attendanceService.getEmployeeName(this.attendance.employee),
        loginDate: this.attendance.loginDateTime,
        loginHour: this.attendance.loginDateTime.getHours(),
        loginMinute: this.attendance.loginDateTime.getMinutes(),
        loginDescription: this.attendance.loginDescription,
        logoutDate: this.attendance.logoutDateTime,
        logoutHour: this.attendance.logoutDateTime.getHours(),
        logoutMinute: this.attendance.logoutDateTime.getMinutes(),
        logoutDescription: this.attendance.logoutDescription,
        remark: this.attendance.remark
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
