import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsComponent } from './positions.component';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionDeleteComponent } from './position-delete/position-delete.component';
import { PositionDetailComponent } from './position-detail/position-detail.component';
import { PositionEditComponent } from './position-edit/position-edit.component';



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
    ReactiveFormsModule
  ]
})
export class PositionsModule { }
