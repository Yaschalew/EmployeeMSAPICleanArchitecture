import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

import { Attendance } from "src/app/models/attendance.model";
import { AttendanceService } from "src/app/services/attendance.service";
import { Injectable } from "@angular/core";

export interface AttendanceState{
  collections: Attendance[];
  selectedItemId: number;
  filter: Filter;
}

export interface Filter{
  search: number
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceStateService {

  // BASIC PARTS OF A STATE SERVICE

  private readonly _state$: BehaviorSubject<AttendanceState> = {} as BehaviorSubject<AttendanceState>

  private get state(): AttendanceState {
    return this._state$.getValue()
  }

  private set state(values: Partial<AttendanceState>) {
    this._state$.next({
      ...this.state,
      ...values
    })
  }

  private selectAll(): Observable<Attendance[]> {
    return this._state$.asObservable().pipe(
      map((state: AttendanceState) => {
        return state.collections
      }),
      distinctUntilChanged()
    );
  }

  private selectById(id: number): Observable<Attendance> {
    return this._state$.asObservable().pipe(
      map((state: AttendanceState) => {
        let attendance: Attendance = {} as Attendance
        if(id > 0){
          for (let i = 0; i < state.collections.length; i++) {
            if(state.collections[i].id === id){
              attendance = state.collections[i]
              break
            }
          }
        }
        return attendance
      }),
      distinctUntilChanged()
    );
  }

  private selectByEmployee(id: number): Observable<Attendance[]> {
    return this._state$.asObservable().pipe(
      map((state: AttendanceState) => {
        let attendances: Attendance[] = []
        if(id <= 0){
          return state.collections
        }
        for (let i = 0; i < state.collections.length; i++) {
          if(state.collections[i].employee === id){
            attendances = [...attendances, state.collections[i]]
          }
        }
        return attendances
      }),
      distinctUntilChanged()
    );
  }

  load() {
    this._attendanceService.getAll()
      .subscribe((response: any) => {
        this.state = { collections: response }
      })
  }

  constructor(
    private _attendanceService: AttendanceService
  ) {
    this._state$ = new BehaviorSubject<AttendanceState>(
      {
        collections: [],
        selectedItemId: 0,
        filter: { search: 0 } as Filter
      } as AttendanceState
    );
    this.load()
  }

  // OBSERVABLE PARTS OF A STATE SERVICE

  readonly $attendances = this.selectAll()
  readonly $selectedAttendance = this.selectById(this.state.selectedItemId)
  readonly $filteredAttendances = this.selectByEmployee(this.state.filter.search)


  // Configure Selected Item
  clearSelected() {
    this.state = { selectedItemId: 0 }
  }

  selectAttendance(id: number) {
    this.state = { selectedItemId: id }
  }

  // Configure Filter
  updateFilter(id: number) {
    this.state = { filter: {search: id} as Filter}
  }

  clearFilter() {
    this.state = { filter: {search: 0} as Filter}
  }

  // // Add new
  // create(attendance: Attendance) {
  //   this._attendanceService.create(attendance)
  //     .subscribe((response: Attendance) => {
  //       attendance = response
  //     })
  //   let oldState: AttendanceState = this.state
  //   this.state = {
  //     collections: [...oldState.collections, attendance],
  //     selectedItemId: attendance.id
  //   }
  // }

  // edit(attendance: Attendance) {
  //   this._attendanceService.edit(attendance, attendance.id)
  //     .subscribe((response: Attendance) => {
  //       attendance = response
  //     })
  //   let oldState: AttendanceState = this.state
  //   this.state = {
  //     collections: [...oldState.collections.filter((item: Attendance) => item.id !== attendance.id), attendance],
  //     selectedItemId: attendance.id
  //   }
  // }

  // erase(id: number){
  //   let oldState: AttendanceState = this.state
  //   this._attendanceService.erase(attendance.id.toString())
  //   .subscribe((response: Attendance) => {
  //     attendance = response
  //   })
  //   let attendance: Attendance = th
  // }

}
