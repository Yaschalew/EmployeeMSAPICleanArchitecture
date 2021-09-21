import { PositionEditComponent } from './position-edit/position-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionsComponent } from './positions.component';
import { PositionDeleteComponent } from './position-delete/position-delete.component';
import { PositionDetailComponent } from './position-detail/position-detail.component';


const routes: Routes = [
  {
     path: '', component : PositionsComponent 
  },
  {
    path:'add-position',component : PositionAddComponent
  },
  {
    path: 'edit-position/:id',component:PositionEditComponent
  },
  {
    path:'delete-position/:id',component:PositionDeleteComponent
  },
  {
    path :'detail-position/:id',component:PositionDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule { }
