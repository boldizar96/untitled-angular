import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { ProductsService } from 'src/app/services/products.service';
//import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  products: Array<IProduct>;

  Today = new Date();

  nameFilter = '';
  searchName = '';

  SortByParam = '';
  SortByOrd = '';

  constructor(private productService: ProductsService ) { }

  ngOnInit(): void {
    this.productService.gettAllProducts().subscribe(
      data => {
        this.products = data;
        /*
        const newProduct = JSON.parse(localStorage.getItem('newProd'));
        if(newProduct){
          this.products = [newProduct, ...this.products];
        }
        */
        console.log(data);
      },
      error => {
        console.log('httperror:');
        console.log(error);
      }
    )
    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.properties = data;
    //     console.log(data);
    //   }
    // );
  }

  onNameFilter(){
    this.searchName = this.nameFilter;
  }

  resetNameFilter(){
    this.searchName = '';
    this.nameFilter = '';
  }

}
