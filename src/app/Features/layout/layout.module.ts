import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    SettingsComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    SettingsComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
