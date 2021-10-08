import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AttendanceModel } from './../models/attendance.model';
import { AttendanceService } from './../services/attendance.service';
import { AttendanceStateService } from './state-management/attendances.state.service';

// import { catchError, delay, finalize } from 'rxjs/operators';




// import { DataSource } from '@angular/cdk/table';

// export class AttendanceDataSource extends DataSource<AttendanceModel>{

//   private attendanceSubject = new BehaviorSubject<AttendanceModel[]>([])
//   private loadingSubject = new BehaviorSubject<boolean>(false)
//   private loading1Subject = new BehaviorSubject<boolean>(true)

//   public loading$ = this.loadingSubject.asObservable()
//   public loading1$ = this.loading1Subject.asObservable()

//   constructor(private _attendancesService: AttendanceService) {
//     super();
//   }

//   connect(){
//     return this.attendanceSubject.asObservable()
//   }

//   disconnect(){
//     this.attendanceSubject.complete()
//     this.loadingSubject.complete()
//   }

//   load(){
//     this.loadingSubject.next(true)
//     this.loading1Subject.next(false)
//     this._attendancesService.getAll()
//     .pipe(
//       catchError(() => of([])),
//       delay(3000),
//       finalize(() => {
//         this.loadingSubject.next(false)
//         this.loading1Subject.next(true)
//       })
//     )
//     .subscribe(attendances => {
//       // console.log(attendances)
//       this.attendanceSubject.next(attendances)
//     })
//   }
// }

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.scss']
})
export class AttendancesComponent implements OnInit {

  displayedColumns: string[] = ['no', 'employee', 'loginTime', 'logoutTime', 'loginDescription', 'loginDescription', 'remark', 'action'];
  dataSource: Observable<AttendanceModel[]>

  constructor(
    private _attendanceStateService: AttendanceStateService,
     private _attendanceService: AttendanceService
  ) {
    this.dataSource = this._attendanceStateService.$filteredAttendances
  }

  ngOnInit(): void {}

  openDialog(id: any) {}

  getEmployeeName(employeeId: number) {
    return this._attendanceService.getEmployeeName(employeeId)
  }
}

