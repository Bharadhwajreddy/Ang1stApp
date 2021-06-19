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
    
    // subscribe to get data from obseravable
    // here getmobileData returns observable so subscribe is used
   this.vegobj.getVegetablesData().subscribe(
     data=>{
       this.vegetables=data
     },
     err=>{
       console.log('error is ',err)
     }
   )
  
  }

 

  productDataReceived:any[] =[];
  productCount=0

  getProductData(a:any){
   this.productDataReceived.push(a)
   this.productCount++
 }

}
