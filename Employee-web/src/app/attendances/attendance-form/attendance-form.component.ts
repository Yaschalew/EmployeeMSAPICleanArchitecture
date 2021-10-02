import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Attendance } from 'src/app/models/attendance.model';
import { AttendanceService } from './../../services/attendance.service';
import { Employee } from 'src/app/models/employees.model';

// import {EventEmitter} from 'events';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {

  @Output() reply = new EventEmitter<Attendance>()

  // @Input() id(att_id: string) {
  //   this.attendance = {
  //     id: '',
  //     employee: '1',
  //     loginDateTime: new Date(),
  //     loginDescription: 'On Time',
  //     logoutDateTime: new Date(),
  //     logoutDescription: 'On Time',
  //     remark: 'Perfect'
  //   }
  // }

  employees: Employee[] = []

  attendance: Attendance = {
    id: '',
    employee: '1',
    loginDateTime: new Date(),
    loginDescription: 'On Time',
    logoutDateTime: new Date(),
    logoutDescription: 'On Time',
    remark: 'Perfect'
  } as Attendance
  forms: FormGroup;

  constructor(
    fb: FormBuilder,
    private _attendanceService: AttendanceService
  ) {
    this.forms = fb.group({
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
