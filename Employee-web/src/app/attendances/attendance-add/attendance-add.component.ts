import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AttendanceModel } from '../../models/attendance.model';
import { AttendanceService } from 'src/app/services/attendance.service';
import { AttendanceStateService } from '../state-management/attendances.state.service';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.scss']
})
export class AttendanceAddComponent implements OnInit {

  constructor(
    private _attendancesStateService: AttendanceStateService
  ) {

  }

  ngOnInit(): void {
    this._attendancesStateService.clearSelected()
  }

  onSubmit(event: any){
    this._attendancesStateService.create()
  }

}
