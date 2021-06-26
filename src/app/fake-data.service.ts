import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { posts } from 'src/models/posts.model';
import { Observable } from 'rxjs';
import { users } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor(private hc:HttpClient) { }

  getposts(): Observable<posts[]>{

    return this.hc.get< posts[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getUsers():Observable<any>{
    return this .hc.get<any>('https://reqres.in/api/users?page=2')
  }
}
