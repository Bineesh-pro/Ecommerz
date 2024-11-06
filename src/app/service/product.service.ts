import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_BASE_URL = "https://fakestoreapi.com/";

  constructor(private http:HttpClient) {
  }

  getProducts(){
    let productFetchUrl = this.API_BASE_URL+"products";
    return this.http.get<Array<Product>>(productFetchUrl);
  }

  getProduct(productId:string | null){
    let productFetchUrl = this.API_BASE_URL+"products/"+productId;
    return this.http.get<Product>(productFetchUrl);
  }

}
