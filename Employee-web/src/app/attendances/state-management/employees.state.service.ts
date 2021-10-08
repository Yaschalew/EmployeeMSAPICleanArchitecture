import { BehaviorSubject, Observable } from "rxjs";
import { EmployeeMapper, EmployeeModel, EmployeeNameModel } from "src/app/models/employees.model";
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import { AttendanceService } from "src/app/services/attendance.service";
import { Employee } from '../../models/employees.model';
import { Injectable } from "@angular/core";

export interface EmployeesState {
  collection: EmployeeModel[]
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesStateService {

  private static _errs: string[] = [
    'Invalid search value(S) passed to employee state service!',
    'Multiple employees with same value exists in employee state service!',
    'Employee with the given search context does not exist in employee state service!'
  ]

  private readonly _state$: BehaviorSubject<EmployeesState>
    = new BehaviorSubject<EmployeesState>({
      collection: []
    })

  private get state(): EmployeesState {
    return this._state$.getValue()
  }
  private set state(value: Partial<EmployeesState>) {
    this._state$.next({
      ...this.state,
      ...value
    })
  }

  // private selectOne(id?: number, name?: string): Observable<EmployeeNameModel> {
  //   return this._state$.asObservable().pipe(
  //     map((result: EmployeesState) => {
  //       if ((!id && !name) || (id && name) || id <= 0 || name === '') this.handleError()
  //       return result.collection
  //     }),
  //     map((result: EmployeeModel[]) => {
  //       // Pass it to name seraching
  //       if (!id) return result
  //       result = result.filter((employee: EmployeeModel) => employee.id === id)
  //       // If multiple employees have this id
  //       if (result.length > 1) this.handleError(1)
  //       // If none of the employees have this id
  //       if (result.length === 0) this.handleError(2)
  //       return result
  //     }),
  //     map((result: EmployeeNameModel[]) => {
  //       if (!name) return result[0]

  //       result = result.filter((employee: EmployeeNameModel) => employee.name === name)
  //       // If multiple employees have this id
  //       if (result.length > 1) this.handleError(1)
  //       // If none of the employees have this id
  //       if (result.length === 0) this.handleError(2)
  //       return result[0]
  //     })
  //   )
  // }

  // private selectMany(name: string): Observable<EmployeeNameModel[]> {
  //   return this._state$.asObservable().pipe(
  //     map((result: EmployeesState) => {
  //       if (name === '') this.handleError()
  //       return result.collection
  //         .filter((employee: EmployeeNameModel) => employee.name.indexOf(name) > -1)
  //     })
  //   )
  // }

  public load() {
    this._attendanceService.getEmployees()
      .subscribe((response: Employee[]) => {
        console.log('Employees')
        console.log(response)
        this.state = {
          collection: response.map((employee: Employee) => {
            return EmployeeMapper.toModel(employee)
          })
        }
      })
  }


  constructor(
    private _attendanceService: AttendanceService
  ) {
    this.load()
  }

  public getNames(): Observable<EmployeeNameModel[]> {
    return this._state$.asObservable()
    .pipe(
      map((result: EmployeesState) => {
        return result.collection.map((employee: EmployeeModel) => {
          return {id: employee.id, name: employee.getName()} as EmployeeNameModel
        })
      })
    )
  }

}
