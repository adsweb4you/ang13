import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// ბლოგები
import { DetalsComponent } from './Blogs/detals/detals.component';
import { ListComponent } from './Blogs/list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    DetalsComponent,
    ListComponent,
    NotfoundComponent,
    PostComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
