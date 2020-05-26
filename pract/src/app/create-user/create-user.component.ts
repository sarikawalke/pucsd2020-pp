import { Component, OnInit ,Input} from '@angular/core';

import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    myGroup = new FormGroup({
    first_name :new FormControl,
     last_name : new FormControl,
     username:new FormControl,
     password: new FormControl,
  });
  constructor(private http: HttpClient,
    public authser: DataService,public router: Router) { }

  ngOnInit(): void {
  }
  @Input() users = {
    first_name :'',
     last_name : '',
    //  username:'',
     password: '',
    
    
  };
  //httpOptions = {
    //headers: new HttpHeaders({
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*',
    //}),
  //};

  onSubmitCreateUser(){
    if(this.users.first_name == '' && this.users.last_name== '' &&  this.users.password == '')
    {
      alert("Please fillout all user info..!!")
    }
    else{
    this.authser.createUser(this.users).subscribe((data: {}) => {
     
      console.log(data)
      this.router.navigate(['/login']);
    })
  }
}
  resetUser(){
    this.users.first_name = '',
    this.users.last_name = '',
    // this.users.username='',
    this.users.password= ''
  }
}
