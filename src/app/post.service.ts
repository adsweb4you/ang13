import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(
    private http: HttpClient
    ) { }

    fordatas : any = '' ;

 
    
 


    URL = 'https://jsonplaceholder.typicode.com/posts';
 

   allposts(){
     return  this.http.get(this.URL)
   }


   booking(data: any){
     //let   Params : any =  new HttpParams().set('', data)  ;
 
     return  this.http.get('https://jsonplaceholder.typicode.com/posts/' + data)
  }

}
