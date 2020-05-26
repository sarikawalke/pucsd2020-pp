import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

user :any = [];
constructor(
private http: HttpClient,
    public authser:DataService) { }

  ngOnInit(): void {
  this. loadUser()
  } 

  loadUser() {
     this.authser.getUser().subscribe((data: {}) => {
      //console.log(data);
      let res: any = data;
      //console.log(res['data']);
      var arrdata = res['data']
      //console.log(arrdata)
      for (var i = 0; i < arrdata.length; i++) {
        // console.log(arrdata[i][0]);
        // console.log(arrdata[i][1]);
        // console.log(arrdata[i][2]);
        // console.log(arrdata[i][3]);
        var obj = {
          "id": arrdata[i][0],
          "first_name": arrdata[i][1],
          "last_name": arrdata[i][2],
          "password": arrdata[i][3]
        };
        //console.log(obj);
        this.user.push(obj);
      }

    })
  }
      
  deleteUser(id){
    if (window.confirm('Are you sure, you want to delete?')){
    this.authser.deleteUser(id).subscribe((data :{} )=>{
      
      this. loadUser()
    })
  }
  }
}


  
  
