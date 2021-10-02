import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { AttendancesComponent } from './attendances.component';
import { AttendancesRoutingModule } from './attendances-routing.module';
import { CommonModule } from '@angular/common';
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
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';

@NgModule({
  declarations: [
    AttendancesComponent,
    AttendanceAddComponent,
    AttendanceEditComponent,
    AttendanceFormComponent
  ],
  imports: [
    CommonModule,
    AttendancesRoutingModule,
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
    MatSelectModule,
  ]
})
export class AttendancesModule { }
