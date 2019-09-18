import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrincipalComponent } from './dashboard/principal/principal.component';
import { OutroComponent } from './dashboard/outro/outro.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: PrincipalComponent },
      { path: 'principal', component: PrincipalComponent },
      { path: 'outro', component: OutroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
