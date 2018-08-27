import { Injectable } from '@angular/core';
import productsList from './mock/products.js'
import * as _ from 'lodash';
import { Product } from '../models/product.js';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getList(): Product[] {
    return productsList;
  }


  getProduct(id: number) : Product {
  let product= _.find(productsList, {id: id});
  return product as Product;
  }
}
