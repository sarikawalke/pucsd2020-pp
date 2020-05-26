import { Component, OnInit ,OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
	user=[];
  constructor() { }

  

  ngOnInit(): void {

  }
}




 

