import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThumnailComponent } from './thumnail/thumnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropMenuComponent,
    SidebarComponent,
    ThumnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
