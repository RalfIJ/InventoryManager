import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenuComponent} from './menu/menu.component';
import {ProductsComponent} from './products/products.component';
import {MaterialsComponent} from './materials/materials.component';
import {HttpClientModule} from "@angular/common/http";
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    ProductsComponent,
    MaterialsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
