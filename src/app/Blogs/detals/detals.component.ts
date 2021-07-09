import { Component, OnInit } from '@angular/core';
import {Blogs} from '../../blogs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-detals',
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.scss']
})
export class DetalsComponent implements OnInit {

  Blogs : any ;
  blogid : any = this.route.snapshot.paramMap.get('id');
 
  constructor(  
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.Blogs = Blogs.find((els:any) =>{
      return els.id  == this.blogid;
    });


    

  }

  redir() {
    this.router.navigate(['/Blogs']);
  }

}
