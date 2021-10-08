import * as moment from 'moment';

import { AttendanceDto, AttendanceModel } from './../models/attendance.model';
import { Employee, EmployeeNameModel } from '../models/employees.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, map } from 'rxjs/operators';

import { AttendanceMapper } from '../models/attendance.model';
import { CustomError } from './error.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const isDate = (s: any) => moment(s, moment.ISO_8601, true).isValid();

function stringToDate(obj: any) {
  return Object.keys(obj)
    .filter((key: any) => obj[key] && isDate(obj[key]))
    .map((key: any) => { obj[key] = moment(obj[key]).toDate() })
}

export function TransformDate(target: any, key: any, descriptor: any) {
  const originalMethod = descriptor.value
  descriptor.value = function () {
    return originalMethod.apply(this).pipe(
      map((obj: any) => Object.assign({}, obj, stringToDate(obj)))
    )
  }
  return descriptor
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService extends CustomError {

  employees: Employee[] = []

  url: string = 'http://localhost:4201/attendances';
  url1: string = 'http://localhost:4201/employees'

  httpOptions = {
    'headers': new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) {
    super('Attendance')
    this.getEmployees()
      .subscribe((data: any) => {
        this.employees = data
      })
  }

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.url1)
  }

  private _getNew(): AttendanceDto {
    let attendanceDto: AttendanceDto = {} as AttendanceDto
    this._http.get<AttendanceDto[]>(this.url)
      .subscribe((response: AttendanceDto[]) => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].entry) {
            response[i].entry = false
            attendanceDto = response[i]
            this._http.put<AttendanceDto>(
              this.url,
              JSON.stringify(attendanceDto),
              this.httpOptions
            ).subscribe()
            break
          }
        }
      })
    return attendanceDto
  }

  getAll(): Observable<AttendanceModel[]> {
    return this._http.get<AttendanceDto[]>(this.url)
      .pipe(
        map((response: AttendanceDto[]) => {
          let attendanceModels: AttendanceModel[] = []
          for (let i = 0; i < response.length; i++) {
            attendanceModels = [...attendanceModels, AttendanceMapper.toModel(response[i])]
          }
          return attendanceModels
        })
      )
  }

  getById(id: number): Observable<AttendanceModel> {
    return this._http.get<AttendanceDto>(this.url + "/" + id)
      .pipe(
        map((attendanceDto: AttendanceDto) => {
          return attendanceDto.toModel()
        })
      )
  }

  create(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this._http.post<AttendanceModel>(
      this.url,
      JSON.stringify(attendance),
      this.httpOptions
    )
      .pipe(
        catchError((err: Error) => {
          let err_str: string = "Delete Operation Failed!"
          window.alert(err_str + " => " + err.message)
          throw Error(err_str)
        }),
        map(() => {
          return this._getNew().toModel()
        })
      )
  }

  edit(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this._http.put<AttendanceDto>(
      this.url,
      JSON.stringify(attendance),
      this.httpOptions
    )
      .pipe(
        map(() => {
          return attendance
        })
      )
  }

  // @TransformDate
  erase(id: number): string {
    let result: string = ''
    this._http.delete(this.url + "/" + id, this.httpOptions)
      .pipe(
        map((reponse: any) => {
          return 'Successfully Deleted!'
        }),
        catchError((err: Error) => {
          let err_str: string = "Delete Operation Failed!"
          window.alert(err_str + " => " + err.message)
          throw Error(err_str)
        })
      )
      .subscribe((response: string) => {
        result = response
      })
    return result
  }

  getEmployeesName(): EmployeeNameModel[] {
    return this.employees.map((employee: Employee) => {
      return {
        id: employee.id,
        name: employee.fname + ' ' + employee.mname + ' ' + employee.lname
      } as EmployeeNameModel
    })
  }

  getEmployeeName(id: number) {
    console.log(id)
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == id) {
        return this.employees[i].fname + ' ' + this.employees[i].mname + ' ' + this.employees[i].lname
      }
    }
    window.alert('Employee doesnot exist!')
    throw Error('Employee doesnot exist!')
  }
}
