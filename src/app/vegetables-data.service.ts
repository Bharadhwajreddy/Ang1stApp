import { Injectable } from '@angular/core';
import { productDetails } from 'src/models/productDetails';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VegetablesDataService {

  constructor(private hc:HttpClient) {
   }

   
   getVegetablesData():Observable<productDetails[]> {
     //get method is used to get data from outside
     return this.hc.get<productDetails[]>("assets/vegetables.json")
   }


  }



