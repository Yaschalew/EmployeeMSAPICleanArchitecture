import * as moment from 'moment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Attendance } from '../models/attendance.model';
import { Employee } from '../models/employees.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export class AttendanceService {

  employees: Employee[] = []

  url: string = 'http://localhost:4201/attendances';
  url1: string = 'http://localhost:4201/employees'

  httpOptions = {
    'headers': new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) {
    this.getEmployees()
      .subscribe((data: any) => {
        this.employees = data
      })
  }

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.url1)
  }

  //@TransformDate
  getAll(): Observable<Attendance> {
    return this._http.get<Attendance>(this.url)
      // .pipe(
      //   map((data: any) => {
      //     console.log(data)
      //     let dataArray: Attendance[] = []
      //     let i = 0;
      //     while (data[i.toString()] != null) {
      //       dataArray = [...dataArray, data[i.toString()]]
      //       i += 1
      //     }
      //     console.log(dataArray)
      //     return dataArray
      //   })
      // )

  }

  // @TransformDate
  getById(id: number): Observable<Attendance> {
    return this._http.get<Attendance>(this.url + "/" + id)

  }

  // @TransformDate
  create(attendance: any): Observable<Attendance> {
    return this._http.post<Attendance>(
      this.url,
      JSON.stringify(attendance),
      this.httpOptions
    );
  }

  // @TransformDate
  edit(attendance: any, id: number): Observable<Attendance> {
    return this._http.put<Attendance>(
      this.url,
      JSON.stringify(attendance),
      this.httpOptions
    );
  }

  // @TransformDate
  erase(id: string) {
    return this._http.delete<Attendance>(this.url + "/" + id, this.httpOptions);
  }

  // private convertToEmployee(data: any) {
  //   let response: Employee[] = []
  //   for (let i = 0; i < data.length; i++) {
  //     let newItem: Employee = data[i]
  //     response = [...response, newItem]
  //   }
  //   return response
  // }
  // private convertToAttendance(data: any) {
  //   let response: Attendance[] = []
  //   for (let i = 0; i < data.length; i++) {
  //     let newItem: Attendance = data[i]
  //     response = [...response, newItem]
  //   }
  //   return response
  // }

  private convertTo<T>(data: any) {
    let response: T = data
    // if (data.loginDateTime === null
    //   || data.loginDateTime === undefined
    //   || data.loginDateTime === '') {
    //   console.log('Attendance')
    //   response = mapAttendance(data)
    // }
    // else {
    //   response = data
    // }

    return response
  }

  private convertArrayTo<T>(data: any) {
    let response: T[] = []
    for (let i = 0; i < data.length; i++) {
      response = [...response, this.convertTo<T>(data[i])]
    }
    return response
  }

  getEmployeeName(id: number) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == id) {
        return this.employees[i].fname + ' ' + this.employees[i].mname + ' ' + this.employees[i].lname
      }
    }
    window.alert('Employee doesnot exist!')
    throw Error('Employee doesnot exist!')
  }
}
