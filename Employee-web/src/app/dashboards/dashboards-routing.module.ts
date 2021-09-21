import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardsComponent } from './dashboards.component';

const routes: Routes = [
  { path: 'main-dashboard', component: DashboardsComponent },
  {path:'',component:AdminComponent}
              ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
