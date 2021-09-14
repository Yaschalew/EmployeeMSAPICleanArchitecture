import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url:string ='https://localhost:5001/api/Experience'

  constructor(private _http:HttpClient) { }
  getExperience()
  {
    this._http.get(this.url);
  }
}
