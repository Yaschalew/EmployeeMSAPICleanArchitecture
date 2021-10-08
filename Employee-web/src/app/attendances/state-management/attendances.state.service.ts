import { AttendanceMapper, AttendanceModel } from './../../models/attendance.model';
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import { AttendanceService } from "src/app/services/attendance.service";
import { EmployeeNameModel } from "src/app/models/employees.model";
import { Injectable } from "@angular/core";

// Attendance State Management

export interface AttendanceNewState {
  item: AttendanceModel,
  isEmpty: boolean
}

export interface AttendanceState {
  collections: AttendanceModel[];
  new: AttendanceModel
  selectedItemId: number | undefined;
  filter: Filter;
}

export interface Filter {
  search: number
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceStateService {

  // Existing Attendances
  // BASIC PARTS OF A STATE SERVICE

  private readonly _state$: BehaviorSubject<AttendanceState>
    = new BehaviorSubject<AttendanceState>(
      {
        collections: [],
        new: {} as AttendanceModel,
        selectedItemId: undefined,
        filter: { search: 0 }
      }
    )

  private get state(): AttendanceState {
    return this._state$.getValue()
  }

  private set state(values: Partial<AttendanceState>) {
    this._state$.next({
      ...this.state,
      ...values
    })
  }

  private selectAll(): Observable<AttendanceModel[]> {
    return this._state$.asObservable().pipe(
      map((state: AttendanceState) => {
        return state.collections
      }),
      distinctUntilChanged()
    );
  }

  private selectById(id?: number): Observable<AttendanceModel> {
    return this._state$.asObservable().pipe(
      map((state: AttendanceState) => {
        if (id === undefined) {
          id = state.selectedItemId
        }
        let attendance: AttendanceModel = {} as AttendanceModel
        if (id !== undefined) {
          for (let i = 0; i < state.collections.length; i++) {
            if (state.collections[i].id === id) {
              attendance = state.collections[i]
              break
            }
          }
          console.log('Attendance Selected')
          console.log(this.state.selectedItemId)
          console.log(attendance)
          return attendance
        }
        else {
          console.log('Attendance Selected New')
          console.log(this.state.selectedItemId)
          console.log(state.new)
          return state.new
        }
      }),
      distinctUntilChanged()
    );
  }

  private selectByEmployee(id: number): Observable<AttendanceModel[]> {
    return this._state$.asObservable().pipe(
      map((state: AttendanceState) => {
        let attendances: AttendanceModel[] = []
        if (id <= 0) {
          return state.collections
        }
        for (let i = 0; i < state.collections.length; i++) {
          if (state.collections[i].employee === id) {
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
        console.log(response)
        this.state = { collections: response }
      })
  }

  constructor(
    private _attendanceService: AttendanceService
  ) {
    this.load()
    console.log(this.state)
  }

  // OBSERVABLE PARTS OF A STATE SERVICE

  readonly $attendances = this.selectAll()
  readonly $selectedAttendance = this.selectById()
  readonly $filteredAttendances = this.selectByEmployee(this.state.filter.search)
  readonly $newAttendance = this.selectById()


  // Configure Selected Item
  clearSelected() {
    this.state = { selectedItemId: undefined }
  }

  selectAttendance(id: number) {
    this.state = { selectedItemId: id }
    console.log('Attendance ID Selected')
    console.log(this.state.selectedItemId)
  }

  // Configure Filter
  updateFilter(id: number) {
    this.state = { filter: { search: id } as Filter }
  }

  clearFilter() {
    this.state = { filter: { search: 0 } as Filter }
  }

  // Data Modifications

  // To the API service

  // Add new
  private _create(attendance: AttendanceModel): AttendanceModel {
    this._attendanceService.create(attendance)
      .subscribe((response: AttendanceModel) => {
        attendance = response
      })
    return attendance
  }
  // Add new
  private _edit(attendance: AttendanceModel): AttendanceModel {
    this._attendanceService.edit(attendance)
      .subscribe((response: AttendanceModel) => {
        attendance = response
      })
    return attendance
  }

  create() {
    let attendance = this.state.new
    this._attendanceService.create(attendance)
      .subscribe((response: AttendanceModel) => {
        attendance = response
      })
    this.selectAll().subscribe((attendances: AttendanceModel[]) => {
      this.state = {
        collections: [...attendances, attendance],
        selectedItemId: attendance.id,
        new: {} as AttendanceModel
      }
    })
  }

  edit(attendance: AttendanceModel) {
    if (!attendance.id || this.state.selectedItemId !== attendance.id) {
      let err = 'The id of the attendance is tampered with!'
      window.alert(err)
      throw Error(err)
    }
    if (attendance.id) {
      this._attendanceService.edit(attendance)
        .subscribe((response: AttendanceModel) => {
          attendance = response
        })
    }
    let oldState: AttendanceState = this.state
    this.state = {
      collections: [...oldState.collections.filter((item: AttendanceModel) => item.id !== attendance.id), attendance],
      selectedItemId: attendance.id
    }
  }

  // erase(id: number){
  //   let oldState: AttendanceState = this.state
  //   this._attendanceService.erase(attendance.id.toString())
  //   .subscribe((response: AttendanceModel) => {
  //     attendance = response
  //   })
  //   let attendance: AttendanceModel = th
  // }

}
