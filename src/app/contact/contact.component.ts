import { Component, OnInit } from '@angular/core';
import { FormBuilder  , Validators , FormGroup ,  FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {PostService} from '../post.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  inputs : any = {
    name:'',
    email:'',
    phone:'',
    subject:'',
    Text:'',

  }


  // უკუკავშირის ფორმა
 ContactForm = this.fb.group({
   name:['', Validators.required],
   email:  [''],
   phone: [''],
   subject:  [''],
   Text: [''],
 })

  sum : any ;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private PostService: PostService
    ) { }

  ngOnInit(): void {
 
  }

  checkdata(){
    
    let formdata = JSON.stringify(this.inputs.name);
    
    return this.PostService.booking(this.inputs.name).subscribe((resp) => {

    })
 
  }

}
