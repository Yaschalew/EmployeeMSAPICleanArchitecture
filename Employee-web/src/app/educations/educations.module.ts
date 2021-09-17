import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddeducationComponent } from './addeducation/addeducation.component';
import { CommonModule } from '@angular/common';
import { DeleteeducationComponent } from './deleteeducation/deleteeducation.component';
import { DetaileducationComponent } from './detaileducation/detaileducation.component';
import { EditeducationComponent } from './editeducation/editeducation.component';
import { EducationsComponent } from './educations.component';
import { EducationsRoutingModule } from './educations-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
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
    MatSnackBarModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class EducationsModule { }
