import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BelowHeaderComponent } from './below-header/below-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    BelowHeaderComponent,
    SidebarComponent,

    DropMenuComponent,
  ],
  imports: [CommonModule, RouterModule],

  exports: [
    HeaderComponent,
    BelowHeaderComponent,
    SidebarComponent,

    DropMenuComponent,
  ],
})
export class LayoutModule {}
