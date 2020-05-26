import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupService } from '../group.service';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-user-groupinfo',
  templateUrl: './user-groupinfo.component.html',
  styleUrls: ['./user-groupinfo.component.css']
})
export class UserGroupinfoComponent implements OnInit {
	userGroup :any =[];

  constructor(private http: HttpClient,
    public authser: GroupService) { }

  ngOnInit(): void {
  this.loadGroups();
  }

  loadGroups() {

    return this.authser.getuserGroup().subscribe((data: {}) => {
      console.log(data);
      let res :any  = data;
      
      var arrayData = res['data'];
      console.log("arrayData[0][0]",arrayData[0][0]);
      for(var i=0 ;i < arrayData.length ;i++){
        console.log("arrayData[i][1]",arrayData[i][1]);
        var obj={
          "id":arrayData[i][0],
          "user_id":arrayData[i][1],
          "group_id":arrayData[i][2],
        };
        console.log("obj",obj)
        this.userGroup.push(obj);
      }
    })
  }

}

  
  

  