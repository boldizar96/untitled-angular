import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  //template: `<h1>Teszt</h1>`,
  templateUrl: "property-card.component.html",
  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ["property-card.component.css"]
}
  
)
export class PropertyCardComponent {
  Property: any = {
    "ProductId": 1,
    "ProductName":"iPhone",
    "Category":"smartphone",
    "Offerer":"Boldi",
    "Description":"Apple iPhone 6S",
    "Price":2000
  }
}
