import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  constructor(public router: Router,
    public authser: GroupService) { }

  ngOnInit(): void {
  }


  @Input() userGroup = {
    group_id: '',
    user_id: '',


  };

  post() {

    this.authser.addUserGroup(this.userGroup.group_id,this.userGroup.user_id).subscribe(res => {
      console.log(res);

      alert("User Added");

    })
  }
}
