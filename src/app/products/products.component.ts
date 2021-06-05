import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/models/productDetails';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

products:productDetails[] = [
  {
    productTitle:'brinjal',
    Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    productImage:'https://image.shutterstock.com/image-photo/two-green-brinal-three-white-260nw-386559169.jpg'
  },
  {
    productTitle:'potato',
    Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    productImage:'https://image.shutterstock.com/image-photo/pile-potatoes-lying-on-wooden-600w-347630291.jpg'
  },
  {
    productTitle:'ladyfinger',
    Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    productImage:'https://image.shutterstock.com/z/stock-photo-hibiscus-esculentus-indian-ladyfinger-indian-bhindi-and-ladyfinger-leaves-natural-ladyfinger-hd-1799046112.jpg'
  },
  {
    productTitle:'tomato',
    Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    productImage:'https://image.shutterstock.com/image-photo/tomato-isolate-on-white-background-600w-1620914383.jpg'
  },
  {
    productTitle:'onion',
    Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    productImage:'https://image.shutterstock.com/image-photo/full-frame-shot-purple-onions-600w-1284082165.jpg'
  },
  {
    productTitle:'capsicum',
    Description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    productImage:'https://image.shutterstock.com/image-photo/pile-green-capsicum-one-red-600w-1624645237.jpg'
  }

]
  productDataReceived:any[] =[];
  productCount=0

 getProductData(a:any){
   this.productDataReceived.push(a)
   this.productCount++
 }


}
