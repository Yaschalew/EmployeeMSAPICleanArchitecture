import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string='https://localhost:5001/api/Employee';
  constructor(private _http:HttpClient) { }
  getEmployees(){
   return this._http.get(this.url);
  }
  addEmployee(employee:any){
    return this._http.post(this.url,employee);
  }
  editEmployee(employee:any,id:string){
    return this._http.patch(this.url+'/'+id,employee);
  }
}
