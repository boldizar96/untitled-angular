import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
//import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-property-card',
  //template: `<h1>Teszt</h1>`,
  templateUrl: "property-card.component.html",
  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ["property-card.component.css"]
}
  
)
export class PropertyCardComponent {
  @Input() product : IProduct;
  @Input() hideIcons: boolean;
}
