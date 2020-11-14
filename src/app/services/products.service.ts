import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProduct } from '../property/IProduct.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  gettAllProducts() : Observable<IProduct[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const productsArray: Array<IProduct> = [];
        for (const id in data){
          if(data.hasOwnProperty(id)){
            productsArray.push(data[id]);
          }          
        }
        return productsArray;
      })
    );
  }
}
