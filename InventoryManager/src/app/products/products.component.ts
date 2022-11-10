import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  public products?: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts(): any {
    this.productService.getProducts().subscribe(products => this.products = products)
  }
}
