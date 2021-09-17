import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url:string ='https://localhost:5001/api/Experience'

  constructor(private _http:HttpClient) { }


  getExperience(){
   return this._http.get(this.url);
  }
  addExperience(experience:any){
    return this._http.post(this.url,experience);
  }
  editExperience(experience:any,id:string){
    return this._http.patch(this.url+'/'+id,experience);
  }
  getExperienceID(id:string){
    return this._http.get(this.url+"/"+id);
  }
  deleteExperience(id:string){
    return this._http.delete(this.url+"/"+id);
  }
}
