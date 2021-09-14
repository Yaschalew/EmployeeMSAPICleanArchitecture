import { CommonModule } from '@angular/common';
import { ExperiencesAddComponent } from './experiences-add/experiences-add.component';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesDeleteComponent } from './experiences-delete/experiences-delete.component';
import { ExperiencesDetailComponent } from './experiences-detail/experiences-detail.component';
import { ExperiencesEditComponent } from './experiences-edit/experiences-edit.component';
import { ExperiencesRoutingModule } from './experiences-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ExperiencesComponent,
    ExperiencesAddComponent,
    ExperiencesDeleteComponent,
    ExperiencesDetailComponent,
    ExperiencesEditComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
