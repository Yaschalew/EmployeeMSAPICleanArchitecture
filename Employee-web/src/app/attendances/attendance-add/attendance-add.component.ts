import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Attendance } from 'src/app/models/attendance.model';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.scss']
})
export class AttendanceAddComponent implements OnInit {

  constructor(
    private _attendanceService: AttendanceService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(event: Attendance){
    console.log(JSON.stringify(event))
    let att: Attendance
    this._attendanceService.create(event)
    .subscribe((data: any) => {
      att == data
    })
  }

}
