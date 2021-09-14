import { RouterModule, Routes } from '@angular/router';

import { AddeducationComponent } from './addeducation/addeducation.component';
import { DeleteeducationComponent } from './deleteeducation/deleteeducation.component';
import { DetaileducationComponent } from './detaileducation/detaileducation.component';
import { EditeducationComponent } from './editeducation/editeducation.component';
import { EducationsComponent } from './educations.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: EducationsComponent },
  { path: 'addeducation', component: AddeducationComponent },
  { path: 'deleteducation', component: DeleteeducationComponent },
  { path: 'editeducation/:id', component: EditeducationComponent },
  { path: 'detaileducation', component: DetaileducationComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationsRoutingModule { }
