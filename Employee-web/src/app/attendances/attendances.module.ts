import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { AttendanceService } from '../services/attendance.service';
import { AttendanceStateService } from './state-management/attendances.state.service';
import { AttendancesComponent } from './attendances.component';
import { AttendancesRoutingModule } from './attendances-routing.module';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MyAttendanceFormComponent } from './my-attendance-form/my-attendance-form.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AttendancesComponent,
    AttendanceAddComponent,
    AttendanceEditComponent,
    AttendanceFormComponent,
    MyAttendanceFormComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],
providers:[
  AttendanceService,
  AttendanceStateService
]
})
export class AttendancesModule { }
