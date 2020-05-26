import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupService } from '../group.service';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
	group :any =[];

  constructor(private http: HttpClient,
    public authser: GroupService) { }

  ngOnInit() {
  this.loadGroups();
  }
  

  loadGroups() {

    return this.authser.getGroup().subscribe((data: {}) => {
      console.log(data);
      let res :any  = data;
      
      var arrayData = res['data'];
      console.log("arrayData[0][0]",arrayData[0][0]);
      for(var i=0 ;i < arrayData.length ;i++){
        console.log("arrayData[i][1]",arrayData[i][1]);
        var obj={
          "id":arrayData[i][0],
          "group_name":arrayData[i][1],
          "group_info":arrayData[i][2],
        };
        console.log("obj",obj)
        this.group.push(obj);
      }
    })
  }

}

  
  