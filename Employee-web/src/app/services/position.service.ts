import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  url='https://localhost:5001/api/Position';


  constructor(private _http:HttpClient) { }
  getPositions(){
   return this._http.get(this.url);
  }
  addPositon(position:any){
    return this._http.post(this.url,position);

  }
  editPosition(id:string,position:any){
    return this._http.patch(this.url+'/'+id,position);
  }
}
