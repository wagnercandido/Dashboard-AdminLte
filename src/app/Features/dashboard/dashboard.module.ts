import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { PrincipalComponent } from './dashboard/principal/principal.component';
import { OutroComponent } from './dashboard/outro/outro.component';
import { TerceiroComponent } from './dashboard/terceiro/terceiro.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
  ],
  declarations: [
    DashboardComponent,
    PrincipalComponent,
    OutroComponent,
    TerceiroComponent
  ]
})
export class DashboardModule { }
