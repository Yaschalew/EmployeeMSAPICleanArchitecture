import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  url:string='https://localhost:5001/api/Attendance';
  constructor(private _http:HttpClient) { }
  getAll(){
   return this._http.get(this.url);
  }
  create(attendance:any){
    return this._http.post(this.url,attendance);
  }
  edit(attendance:any,id:string){
    return this._http.patch(this.url+'/'+id,attendance);
  }
  getById(id:string){
    return this._http.get(this.url+"/"+id);
  }
  erase(id:string){
    return this._http.delete(this.url+"/"+id);
  }
}
