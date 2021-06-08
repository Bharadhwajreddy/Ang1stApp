import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/models/productDetails';
import { VegetablesDataService } from '../vegetables-data.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  vegetables:any

  constructor(private vegobj:VegetablesDataService) { }

  ngOnInit(): void {
  this.vegetables=this.vegobj.getVegetablesData()
  
  }

 

  productDataReceived:any[] =[];
  productCount=0

  getProductData(a:any){
   this.productDataReceived.push(a)
   this.productCount++
 }

}
