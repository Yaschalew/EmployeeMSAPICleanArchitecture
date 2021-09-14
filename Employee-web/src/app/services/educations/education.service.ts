import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  url:string ='https://localhost:5001/api/Education'

  constructor(private _http:HttpClient) {

   }
  getEducation()
  {
   return this._http.get(this.url);
  }
  getEducationById(id:string)
  {
    return this._http.get(this.url+"/"+id)
  }
  addEducation(education:any)
  {
    return this._http.post(this.url,education);

  }
  editEducation(education:any,id:string)
  {
    return this._http.patch(this.url+'/'+id,education);
  }
  deleteEducation(education:any,id:string){
    return this._http.delete(this.url+'/'+id,education);
  }

}
