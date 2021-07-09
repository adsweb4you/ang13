import { Component ,  Input , OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

 

export class AppComponent  implements OnInit {
 
products = [
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},
  {title:"პროდუქტქ", price:250, img:"assets/img/logo.jpg", id:1},

]

logo = "assets/img/logo.jpg";
logo1 = "assets/img/logo2.jpg";

imgtype = "img-fluid";
borderimg = "rounded"

@Input() hero :any ;

colors  = "black"

checkimg = true;


pusharr(events: any){
  events.preventDefault();

  this.products.push( {title:"ახალი პროდუქტი", price:300, img:"assets/img/logo.jpg", id:100})
 
}

 

ngOnInit(){

 

 let  globalthis = this;

  window.addEventListener("scroll", function(){
  if(this.scrollY > 50){
    globalthis.colors = "green"
  }else{
    globalthis.colors = "black"
  }
  })

}



}

 

 