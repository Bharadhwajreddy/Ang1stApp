import { Component, Input, OnInit } from '@angular/core';
import { productDetails } from 'src/models/productDetails';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() productObject: productDetails={
    productTitle:'its a titte',
    Description:'hello hii lorem ipsum',
    productImage:'https://image.shutterstock.com/image-photo/two-green-brinal-three-white-260nw-386559169.jpg'
     }  

}
