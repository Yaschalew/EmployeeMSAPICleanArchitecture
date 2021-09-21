import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };
  
url:string='https://localhost:5001/api/Logins';
  constructor(private _http:HttpClient) { }

  login (user:any){
return this._http.post(this.url,user);
  }
}
