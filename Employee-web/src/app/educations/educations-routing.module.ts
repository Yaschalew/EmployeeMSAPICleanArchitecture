import { RouterModule, Routes } from '@angular/router';

import { AddeducationComponent } from './addeducation/addeducation.component';
import { AddpopupComponent } from  './addpopup/addpopup.component';
import { DeleteeducationComponent } from './deleteeducation/deleteeducation.component';
import { DetaileducationComponent } from './detaileducation/detaileducation.component';
import { EditeducationComponent } from './editeducation/editeducation.component';
import { EducationsComponent } from './educations.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: EducationsComponent },
  { path:'addpopup', component: AddpopupComponent},
  { path: 'addeducation', component: AddeducationComponent },
  { path: 'deleteducation/:id', component: DeleteeducationComponent },
  { path: 'editeducation/:id', component: EditeducationComponent },
  { path: 'detaileducation/:id', component: DetaileducationComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationsRoutingModule { }
