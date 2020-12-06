import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
//import { IProduct } from '../property/IProduct.interface';
import { Observable } from 'rxjs';
import { IProduct } from '../model/iproduct';
import { Product } from '../model/product';
import { IProductBase } from '../model/iproductbase';
import { PostProduct } from '../model/postproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  testApi(){
    // https://gorest.co.in/public-api/users
    this.http.get<string[]>('https://localhost:5001/api/products').subscribe(
      Response => console.log(Response)
    );
  }

  getProduct(id: number){
    return this.gettAllProducts().pipe(
      map(productsArray => {
        return productsArray.find(p => p.ProductId === id);
      })
    );
  }

  gettAllProductsFromApi() : Observable<any[]>{
    return this.http.get('https://localhost:5001/api/products').pipe(
      map(data => {
        const productsArray: Array<Object> = [];
        const localProducts = JSON.parse(localStorage.getItem('newProd'));
        if(localProducts){
          for (const id in localProducts){
            if(localProducts.hasOwnProperty(id)){
              productsArray.push(localProducts[id]);
            } 
          }
        }
        for (const id in data){
          if(data.hasOwnProperty(id)){
            productsArray.push(data[id]);
          } 
        }
        return productsArray;
      })
    );
  }

  gettAllProducts(Category?: number) : Observable<Product[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const productsArray: Array<Product> = [];
        const localProducts = JSON.parse(localStorage.getItem('newProd'));
        if(localProducts){
          for (const id in localProducts){
            if(Category){
              if(localProducts.hasOwnProperty(id) && localProducts[id].Category === Category){
                productsArray.push(localProducts[id]);
              }
            } else{
              if(localProducts.hasOwnProperty(id)){
                productsArray.push(localProducts[id]);
              }
            }    
          }
        }

        for (const id in data){
          if(Category){
            if(data.hasOwnProperty(id) && data[id].Category === Category){
              productsArray.push(data[id]);
            } 
          } else{
            if(data.hasOwnProperty(id)){
              productsArray.push(data[id]);
            } 
          }        
        }
        return productsArray;
      })
    );
  }

  addProductToApi(product: PostProduct) : Observable<PostProduct>{
    console.log(product);
    return this.http.post<PostProduct>('https://localhost:5001/api/products', JSON.stringify([product]));
  }

  addProduct(product: Product){
    let newProd = [product];

    if(localStorage.getItem('newProd')){
      newProd = [product, ...JSON.parse(localStorage.getItem('newProd'))];
    }

    localStorage.setItem('newProd', JSON.stringify(newProd));
  }

  newProdID(){
    if(localStorage.getItem('ProductId')){
      localStorage.setItem('ProductId', String(+localStorage.getItem('ProductId') + 1));
      return +localStorage.getItem('ProductId');
    }
    else{
      localStorage.setItem('ProductId', '101');
      return 101;
    }
  }
}
