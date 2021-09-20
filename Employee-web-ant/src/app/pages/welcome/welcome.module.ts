import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import {CommonModule} from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    NzTableModule,
    CommonModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
