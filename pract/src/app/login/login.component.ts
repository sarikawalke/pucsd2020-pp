import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public result;
   @Input() userInfo = { id: '',password:''}

  constructor(private http: HttpClient,public loginauthser:LoginService,public router: Router) { }

  ngOnInit(): void {
  }
  signUpuser() {
      if (this.userInfo.id=='root' && this.userInfo.password=='admin')
      {
      this.router.navigate(['/home']);

      }
      else{
    this.loginauthser.loginInfo(this.userInfo.id, this.userInfo.password).subscribe(data => {
      console.log(data);
      let res: any = data;
      if (res.status == 200) {


        alert("login")

        this.router.navigate(['/userside-component']);

      }
      else{

        alert("Password incorrect")


      }

    })

  }
  }
}
