import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Product } from 'src/app/model/product';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AuthService } from 'src/app/services/auth.service';
//import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addProductForm: NgForm;
  @ViewChild('formsTabs') staticTabs: TabsetComponent;
  product = new Product();

  //addProductForm2: FormGroup;

  categories: Array<string> = ['Okostelefon', 'Laptop', 'Asztali számítógép']

  preView: IProduct = {
    ProductId: null,
    ProductName: '',
    Category: null,
    Active: null,
    Description: '',
    Offerer: '',
    Price: null,
    Image: null
  };  

  //constructor(private fb: FormBuilder, private router: Router) { }
  constructor(private productService: ProductsService, private router: Router, private alertify: AlertifyService, private authServ: AuthService) { }

  ngOnInit(): void {
    //this.CreateAddProductForm();
  }
  /*
  CreateAddProductForm(){
    this.addProductForm2 = this.fb.group({
      ProductName: [null, Validators.required],
      Category: [null, Validators.required],
      Description: [null, Validators.required],
      Price: [null, Validators.required],
      Active: [null, Validators.required]
    })
  }
  */

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Submit ok!');
    this.mapProduct();
    this.productService.addProduct(this.product);
    this.alertify.success('Eszköz léterjött!');
    this.router.navigate(['/']);
    /*
    console.log(this.addProductForm.value.alapInfok.ProductName)
    console.log(this.addProductForm.value.arazas)
    console.log(this.addProductForm);
    */
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  mapProduct(): void{
    this.product.ProductId = this.productService.newProdID();
    this.product.ProductName = this.preView.ProductName;
    this.product.Category = this.preView.Category;
    this.product.Active = this.preView.Active;
    this.product.Price = this.preView.Price;
    this.product.Offerer = this.authServ.currUsr;
    this.product.Description = this.preView.Description;
    this.product.Image = this.preView.Image;
  }

}
