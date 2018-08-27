import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  constructor(private productsService: ProductsService, public router: Router) { }

  ngOnInit() {
    this.productList = this.productsService.getList();
  }


  showProduct(product: Product) {
    this.router
      .navigate([{ outlets: { 'second-outlet': 'products/' + product.id } }]);
  }

  deleteProduct(id: number){
    //delete
  }

}
