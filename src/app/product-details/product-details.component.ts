import { Component, Input } from '@angular/core';
import { productDetails } from '../models/productDetails';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() productObj:productDetails;

}
