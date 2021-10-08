import { CommonModule } from '@angular/common';
import { ExperiencesAddComponent } from './experiences-add/experiences-add.component';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesDeleteComponent } from './experiences-delete/experiences-delete.component';
import { ExperiencesDetailComponent } from './experiences-detail/experiences-detail.component';
import { ExperiencesEditComponent } from './experiences-edit/experiences-edit.component';
import { ExperiencesRoutingModule } from './experiences-routing.module';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperiencepopupComponent } from './experiencepopup/experiencepopup.component';

@NgModule({
  declarations: [
    ExperiencesComponent,
    ExperiencesAddComponent,
    ExperiencesDeleteComponent,
    ExperiencesDetailComponent,
    ExperiencesEditComponent,
    ExperiencepopupComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
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
export class ExperiencesModule { }
