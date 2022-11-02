import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialsMenuComponent } from './materials-menu/materials-menu.component';
import { ProductsMenuComponent } from './products-menu/products-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MaterialsMenuComponent,
    ProductsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
