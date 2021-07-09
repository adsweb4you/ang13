import { Component, OnInit } from '@angular/core';
import {Blogs} from '../../blogs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Blogs : any = Blogs;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  
  ) { }

  ngOnInit(): void {
    
 
 
  }

}
