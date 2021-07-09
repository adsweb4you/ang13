import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent} from './contact/contact.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

// ბლოგები
import { DetalsComponent } from './Blogs/detals/detals.component';
import { ListComponent } from './Blogs/list/list.component';

//404
import { NotfoundComponent } from './notfound/notfound.component';


// posts
import { PostComponent } from './post/post.component';

const routes: Routes = [

  { path: '', component: HomepageComponent},  
  { path: 'Contact', component: ContactComponent },
  { path: 'Blogs', component: ListComponent },
  { path: 'Posts', component: PostComponent },
  { path: 'Blogs/detals/:id', component: DetalsComponent },
  { path: '**', component: NotfoundComponent },
//   { path: 'list', component: ListComponent,


//   children: [
//     {
//       path: 'Detals/:id', // child route path
//       component: DetalsComponent, // child route component that the router renders
//     },
    
//   ],
// },
 



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
