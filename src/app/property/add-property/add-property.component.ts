import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addProductForm: NgForm;
  @ViewChild('formsTabs') staticTabs: TabsetComponent;

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Submit ok!');
    console.log(this.addProductForm);
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
