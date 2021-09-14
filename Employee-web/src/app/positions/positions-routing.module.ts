import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionsComponent } from './positions.component';


const routes: Routes = [
  {
     path: '', component : PositionsComponent 
  },
  {
    path:'add-position',component : PositionAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule { }
