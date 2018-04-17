import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ServiceRestOauth } from '../../service/service.rest.oauth';
import { ServiceRestUser } from '../../service/service.rest.user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;

  constructor(public router: Router,private serviceRestOauth: ServiceRestOauth,private serviceRestUser: ServiceRestUser) {}

    ngOnInit() {}

    onLoggedin() {
      this.serviceRestOauth.login(this.username,this.password).subscribe(
        data => {
          this.serviceRestUser.getMe(data["access_token"]).subscribe(data => {
            localStorage.setItem('id', data["id"]);
            localStorage.setItem('role', data["role"]);
          });
          localStorage.setItem('username', this.username);
          localStorage.setItem('access_token', data["access_token"]);
          localStorage.setItem('refresh_token', data["refresh_token"]);
          localStorage.setItem('expires_in', data["expires_in"]);
          localStorage.setItem('isLoggedin', 'true');
        },
        err => { console.log(err); }
      );
      this.router.navigate(["/dashboard"]);
    }
}
