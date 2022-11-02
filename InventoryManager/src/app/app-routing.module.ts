import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsMenuComponent } from './materials-menu/materials-menu.component';
import { ProductsMenuComponent } from './products-menu/products-menu.component';

const routes: Routes = [{path: "materials", component: MaterialsMenuComponent}, {path: "products", component: ProductsMenuComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
