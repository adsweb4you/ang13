import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title : any;

  Posts : any;

  constructor(
    private PostService : PostService
  ) { }

  ngOnInit(): void {

   this.PostService.allposts().subscribe(resp => {
    this.Posts = resp;
   });

  }

}
