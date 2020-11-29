import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public productId: number;
  product = new Product();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Product) => {
        this.product = data['prp'];
      }
    );

    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true,
        previewCloseOnClick: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/sample.png',
        medium: 'assets/images/sample.png',
        big: 'assets/images/sample.png'
      },
      {
        small: 'assets/images/sample2.png',
        medium: 'assets/images/sample2.png',
        big: 'assets/images/sample2.png'
      },
      {
        small: 'assets/images/sample3.png',
        medium: 'assets/images/sample3.png',
        big: 'assets/images/sample3.png'
      }
    ];

    /*
    this.route.params.subscribe(
      (params) => {
        this.productId = +params['id'];
        this.productService.getProduct(this.productId).subscribe(
          (data: Product) => { this.product = data}
        ), error => this.router.navigate(['/'])
      }
    );
    */
    
  }

  /*
  onSelectNext(){
    this.productId += 1;
    this.router.navigate(['property-detail', this.productId]);
  }
  */
}
