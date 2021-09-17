import { RouterModule, Routes } from '@angular/router';

import { ExperiencesAddComponent } from './experiences-add/experiences-add.component';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesDeleteComponent } from './experiences-delete/experiences-delete.component';
import { ExperiencesDetailComponent } from './experiences-detail/experiences-detail.component';
import { ExperiencesEditComponent } from './experiences-edit/experiences-edit.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ExperiencesComponent },
  { path: 'experiences-add', component: ExperiencesAddComponent },
  { path: 'experiences-delete/:id', component: ExperiencesDeleteComponent },
  { path: 'experiences-edit/:id', component: ExperiencesEditComponent },
  { path: 'experiences-detail/:id', component: ExperiencesDetailComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
