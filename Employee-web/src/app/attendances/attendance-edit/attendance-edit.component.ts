import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AttendanceModel } from '../../models/attendance.model';
import { AttendanceService } from '../../services/attendance.service';
import { AttendanceStateService } from '../state-management/attendances.state.service';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.scss']
})
export class AttendanceEditComponent implements OnInit {

  attendance: AttendanceModel | undefined
  constructor(
    private _attendanceService: AttendanceService,
    private _attendanceStateService: AttendanceStateService,
    private _route: ActivatedRoute,
  ) {
    var id_str: string| null =  this._route.snapshot.paramMap.get('id')
    if(id_str === null){
      id_str = "0"
    }
    let id: number = +id_str
    this._attendanceStateService.selectAttendance(id)
  }

  ngOnInit(): void {
  }

  onSubmit(event: AttendanceModel){

  }

}
