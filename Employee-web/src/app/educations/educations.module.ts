import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddeducationComponent } from './addeducation/addeducation.component';
import { CommonModule } from '@angular/common';
import { DeleteeducationComponent } from './deleteeducation/deleteeducation.component';
import { DetaileducationComponent } from './detaileducation/detaileducation.component';
import { EditeducationComponent } from './editeducation/editeducation.component';
import { EducationsComponent } from './educations.component';
import { EducationsRoutingModule } from './educations-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    EducationsComponent,
    AddeducationComponent,
    DeleteeducationComponent,
    EditeducationComponent,
    DetaileducationComponent
  ],
  imports: [
    CommonModule,
    EducationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EducationsModule { }
