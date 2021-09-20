import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobInfoService {
url:string='https://localhost:5001/api/JobInformation';
  constructor(private _http:HttpClient) { }

  getJobInfos(){
    return this._http.get(this.url);
  }
  addJobInfo(jobInfo:any){
    return this._http.post(this.url,jobInfo);
  }
}
