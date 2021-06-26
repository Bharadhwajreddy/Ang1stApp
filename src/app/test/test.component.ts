import { Component, OnInit } from '@angular/core';
import { posts } from 'src/models/posts.model';
import { users } from 'src/models/users.model';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  postsData:posts[]=[]
  usersData:any
  constructor(private fc:FakeDataService) { }

  ngOnInit(): void {
    this.fc.getUsers().subscribe(
      udata=>{
        this.usersData=udata
        
      },
      err=>{
        console.log('err is ',err)
      }
    )
  }

}
