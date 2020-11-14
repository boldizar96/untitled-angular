import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  products: Array<IProduct>;

  constructor(private productService: ProductsService ) { }

  ngOnInit(): void {
    this.productService.gettAllProducts().subscribe(
      data => {
        this.products = data;
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

}
