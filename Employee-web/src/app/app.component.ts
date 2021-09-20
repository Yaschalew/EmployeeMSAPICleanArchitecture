import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth:Boolean=false;
  constructor(private _tokenStorageService : TokenStorageService){
    this.auth=this._tokenStorageService.getIsLogin();
  }
  title = 'Employee-web';
}
