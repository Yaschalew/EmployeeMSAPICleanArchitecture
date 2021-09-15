import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddeducationComponent } from './addeducation/addeducation.component';
import { CommonModule } from '@angular/common';
import { DeleteeducationComponent } from './deleteeducation/deleteeducation.component';
import { DetaileducationComponent } from './detaileducation/detaileducation.component';
import { EditeducationComponent } from './editeducation/editeducation.component';
import { EducationsComponent } from './educations.component';
import { EducationsRoutingModule } from './educations-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
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
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class EducationsModule { }
