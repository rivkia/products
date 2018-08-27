import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  newProduct: boolean;
  productId: number;
  public form: FormGroup;
  product: Product;
  
  constructor(private route: ActivatedRoute,  public router: Router,
    private formBuilder: FormBuilder,private productsService: ProductsService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.productId = isNaN(params['id']) ? 0 : parseInt(params['id']);
      if (this.productId == 0) {
        this.newProduct = true;
      }
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }
  initialiseState(){
    this.initForm();
    this.getProduct();
 
  }

  initForm() {
    this.form = this.form = this.formBuilder.group({
      id: '',
      name: '',
      picture: '',
      description: '',
      price: '',
    });
  }

  getProduct(){
    this.product = this.productsService.getProduct(this.productId);
    this.form.patchValue(this.product);
  }
}
