import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsComponent } from './materials/materials.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{path: "materials", component: MaterialsComponent}, {path: "products", component: ProductsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
