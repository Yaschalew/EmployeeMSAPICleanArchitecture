import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsComponent } from './positions.component';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionDeleteComponent } from './position-delete/position-delete.component';
import { PositionDetailComponent } from './position-detail/position-detail.component';
import { PositionEditComponent } from './position-edit/position-edit.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    PositionsComponent,
    PositionAddComponent,
    PositionDeleteComponent,
    PositionDetailComponent,
    PositionEditComponent
    
  ],
  imports: [
    CommonModule,
    PositionsRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ]
})
export class PositionsModule { }
