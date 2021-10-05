import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Attendance } from '../../models/attendance.model';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.scss']
})
export class AttendanceEditComponent implements OnInit {

  attendance: Attendance | undefined
  constructor(
    private _attendanceService: AttendanceService,
    private _route: ActivatedRoute,
  ) {
    var id_str: string| null =  this._route.snapshot.paramMap.get('id')
    if(id_str === null){
      id_str = "0"
    }
    let id: number = +id_str
    console.log(id)
    this._attendanceService.getById(id)
    .subscribe((data:any)=>{
      console.log(data)
      this.attendance = data
    });
    // console.log(this.attendance)
  }

  ngOnInit(): void {
  }

}
