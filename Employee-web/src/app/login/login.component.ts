import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forms: FormGroup;
  employees:any;
  logingError:string='';
  constructor(private _login: LoginService,_fb:FormBuilder, private _tokenStorageService:TokenStorageService) { 
    this.forms=_fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  get f(){
    return this.forms.controls;
 }

 onSubmit() {
 this._login.login(this.forms.value).subscribe((data:any)=>{
  console.warn(data);
  if(data.isSuccess){
    this._tokenStorageService.saveToken(data.message);
    this._tokenStorageService.saveUser(data.email);
    this._tokenStorageService.isLogin(data.isSuccess);
    window.location.reload();
  }
  else{
    this.logingError=data.message;
    this._tokenStorageService.saveToken("");
    this._tokenStorageService.saveUser("");
    this._tokenStorageService.isLogin(false);
  }
 
 })
  
 }
}
