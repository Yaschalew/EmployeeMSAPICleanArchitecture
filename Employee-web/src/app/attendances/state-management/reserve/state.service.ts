// import { Attendance } from 'src/app/models/attendance.model';
// import { Attendance } from 'src/app/models/attendance.model';
// import { Attendance } from 'src/app/models/attendance.model';
// import { AttendanceState, Filter } from './state.model';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';

// import { Attendance } from 'src/app/models/attendance.model';
// import { AttendanceService } from 'src/app/services/attendance.service';
// import { Injectable } from '@angular/core';
// import { ShareReplayConfig } from 'rxjs/internal/operators/shareReplay';

// // export class StateService<T> {

// //   private readonly _state$: BehaviorSubject<T> = {} as BehaviorSubject<T>
// //   readonly state$ = this._state$.asObservable()
// //   // readonly filtered$ = this._state$.asObservable()
// //   // .pipe(
// //   //   filter(getEventsFiltered<T>(
// //   //     this.state$.subscribe((items: any) => {return items})
// //   //   ))
// //   // )

//   // constructor(initialValue: T) {
//   //   this._state$ = new BehaviorSubject<T>(initialValue);
//   // }

//   // protected get state(): T {
//   //   return this._state$.getValue()
//   // }

//   // protected set state(values: Partial<T>) {
//   //   this._state$.next({
//   //     ...this.state,
//   //     ...values
//   //   })
//   // }

//   // protected select<K>(mapFn: (state: T) => K): Observable<K> {
//   //   return this._state$.asObservable().pipe(
//   //     map((state: T) => mapFn(state)),
//   //     distinctUntilChanged()
//   //   );
//   // }

// // }

// // function getEventsFiltered<T>(todos: T[], filter: Filter): T[] {
// //   return todos.filter((item) => {
// //     return (
// //       JSON.stringify(item)[filter.key].indexOf(filter.search) > -1
// //     )
// //   });
// // }


// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AttendanceStateService {

// //   private readonly _state$: BehaviorSubject<AttendanceState> = {} as BehaviorSubject<AttendanceState>
// //   readonly state$ = this._state$.asObservable()

// //   readonly filteredAttendances$: Observable<Attendance[]> = this.select((state: AttendanceState) => {
// //     if (state.filter.search === undefined || state.filter.search === '') {
// //       return state.collections
// //     }
// //     return state.collections.filter((attendance: Attendance) => state.filter.search === attendance.employee.toString())
// //   }).pipe(
// //     shareReplay({ refCount: true } as ShareReplayConfig)
// //   );

// //   readonly selectedAttendance$: Observable<Attendance | undefined> = this.select((state: AttendanceState) => {
// //     if (state.selectedItemId === undefined || state.selectedItemId === 0) {
// //       return {} as Attendance
// //     }
// //     return state.collections.find((item: Attendance) => item.id === state.selectedItemId)
// //   }).pipe(
// //     shareReplay({ refCount: true, bufferSize: 1 } as ShareReplayConfig)
// //   );

// //   constructor(
// //     private _attendanceService: AttendanceService
// //   ) {
// //     this._state$ = new BehaviorSubject<AttendanceState>({} as AttendanceState);
// //   }

// //   protected get state(): T {
// //     return this._state$.getValue()
// //   }

// //   protected set state(values: Partial<T>) {
// //     this._state$.next({
// //       ...this.state,
// //       ...values
// //     })
// //   }

// //   protected select<K>(mapFn: (state: T) => K): Observable<K> {
// //     return this._state$.asObservable().pipe(
// //       map((state: T) => mapFn(state)),
// //       distinctUntilChanged()
// //     );
// //   }

// //   // constructor(
// //   //   private _attendanceService: AttendanceService
// //   // ) {
// //   //   super({} as AttendanceState);
// //   //   this.load();
// //   // }

// //   load() {
// //     this._attendanceService.getAll()
// //       .subscribe((response: any) => {
// //         this.state = { collections: response }
// //       })
// //   }

// //   // Configure Selected Item
// //   clearSelected() {
// //     this.state = { selectedItemId: 0 }
// //   }

// //   selectAttendance(attendance: Attendance) {
// //     this.state = { selectedItemId: attendance.id }
// //   }

// //   // Configure Filter
// //   updateFilter(filter: Filter) {
// //     this.state = { filter: filter }
// //   }

// //   clearFilter() {
// //     this.state = {
// //       filter: {
// //         key: '',
// //         search: ''
// //       }
// //     }
// //   }

// //   // Add new
// //   create(attendance: Attendance) {
// //     this._attendanceService.create(attendance)
// //       .subscribe((response: Attendance) => {
// //         attendance = response
// //       })
// //     let oldState: AttendanceState = this.state
// //     this.state = {
// //       collections: [...oldState.collections, attendance],
// //       selectedItemId: attendance.id
// //     }
// //   }

// //   edit(attendance: Attendance) {
// //     this._attendanceService.edit(attendance, attendance.id)
// //       .subscribe((response: Attendance) => {
// //         attendance = response
// //       })
// //     let oldState: AttendanceState = this.state
// //     this.state = {
// //       collections: [...oldState.collections.filter((item: Attendance) => item.id !== attendance.id), attendance],
// //       selectedItemId: attendance.id
// //     }
// //   }

// //   // erase(id: number){
// //   //   let oldState: AttendanceState = this.state
// //   //   this._attendanceService.erase(attendance.id.toString())
// //   //   .subscribe((response: Attendance) => {
// //   //     attendance = response
// //   //   })
// //   //   let attendance: Attendance = th
// //   // }

// // }

// // function getEventsFiltered(todos: Attendance[], filter: Filter): Attendance[] {
// //   return todos.filter((item) => {
// //     return (
// //       JSON.stringify(item)[filter.key].indexOf(filter.search) > -1
// //     )
// //   });
// // }

// export interface AttendanceState{
//   collections: Attendance[];
//   selectedItemId: number;
//   filter: Filter;
// }

// export interface Filter{
//   search: number
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AttendanceStateService {

//   // BASIC PARTS OF A STATE SERVICE

//   private readonly _state$: BehaviorSubject<AttendanceState> = {} as BehaviorSubject<AttendanceState>

//   private get state(): AttendanceState {
//     return this._state$.getValue()
//   }

//   private set state(values: Partial<AttendanceState>) {
//     this._state$.next({
//       ...this.state,
//       ...values
//     })
//   }

//   private selectAll(): Observable<Attendance[]> {
//     return this._state$.asObservable().pipe(
//       map((state: AttendanceState) => {
//         return state.collections
//       }),
//       distinctUntilChanged()
//     );
//   }

//   private selectById(id: number): Observable<Attendance> {
//     return this._state$.asObservable().pipe(
//       map((state: AttendanceState) => {
//         let attendance: Attendance = {} as Attendance
//         for (let i = 0; i < state.collections.length; i++) {
//           if(state.collections[i].id === id){
//             attendance = state.collections[i]
//             break
//           }
//         }
//         return attendance
//       }),
//       distinctUntilChanged()
//     );
//   }

//   private selectByEmployee(id: number): Observable<Attendance[]> {
//     return this._state$.asObservable().pipe(
//       map((state: AttendanceState) => {
//         let attendances: Attendance[] = []
//         for (let i = 0; i < state.collections.length; i++) {
//           if(state.collections[i].employee === id){
//             attendances = [...attendances, state.collections[i]]
//           }
//         }
//         return attendances
//       }),
//       distinctUntilChanged()
//     );
//   }

//   constructor(
//     private _attendanceService: AttendanceService
//   ) {
//     this._state$ = new BehaviorSubject<AttendanceState>({} as AttendanceState);
//     this.load()
//   }

//   // OBSERVABLE PARTS OF A STATE SERVICE

//   readonly $state = this._state$.asObservable()

//   readonly $attendances: Observable<Attendance[]> = this._state$.asObservable()
//   .pipe(
//     map((state: AttendanceState) => {
//       return this.state.collections
//     })
//   )

//   readonly filteredAttendances$: Observable<Attendance[]> = this.select((state: AttendanceState) => {
//     if (state.filter.search === undefined || state.filter.search === '') {
//       return state.collections
//     }
//     return state.collections.filter((attendance: Attendance) => state.filter.search === attendance.employee.toString())
//   }).pipe(
//     shareReplay({ refCount: true } as ShareReplayConfig)
//   );

//   readonly selectedAttendance$: Observable<Attendance | undefined> = this.select((state: AttendanceState) => {
//     if (state.selectedItemId === undefined || state.selectedItemId === 0) {
//       return {} as Attendance
//     }
//     return state.collections.find((item: Attendance) => item.id === state.selectedItemId)
//   }).pipe(
//     shareReplay({ refCount: true, bufferSize: 1 } as ShareReplayConfig)
//   );






//   load() {
//     this._attendanceService.getAll()
//       .subscribe((response: any) => {
//         this.state = { collections: response }
//       })
//   }

//   // Configure Selected Item
//   clearSelected() {
//     this.state = { selectedItemId: 0 }
//   }

//   selectAttendance(attendance: Attendance) {
//     this.state = { selectedItemId: attendance.id }
//   }

//   // Configure Filter
//   updateFilter(filter: Filter) {
//     this.state = { filter: filter }
//   }

//   clearFilter() {
//     this.state = {
//       filter: {
//         key: '',
//         search: ''
//       }
//     }
//   }

//   // Add new
//   create(attendance: Attendance) {
//     this._attendanceService.create(attendance)
//       .subscribe((response: Attendance) => {
//         attendance = response
//       })
//     let oldState: AttendanceState = this.state
//     this.state = {
//       collections: [...oldState.collections, attendance],
//       selectedItemId: attendance.id
//     }
//   }

//   edit(attendance: Attendance) {
//     this._attendanceService.edit(attendance, attendance.id)
//       .subscribe((response: Attendance) => {
//         attendance = response
//       })
//     let oldState: AttendanceState = this.state
//     this.state = {
//       collections: [...oldState.collections.filter((item: Attendance) => item.id !== attendance.id), attendance],
//       selectedItemId: attendance.id
//     }
//   }

//   // erase(id: number){
//   //   let oldState: AttendanceState = this.state
//   //   this._attendanceService.erase(attendance.id.toString())
//   //   .subscribe((response: Attendance) => {
//   //     attendance = response
//   //   })
//   //   let attendance: Attendance = th
//   // }

// }
