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

      this.serviceRestUser.getMe('f9e80329-8ebe-46c2-97b5-9ebf37ad3074').subscribe( user => localStorage.setItem('id', user["id"]));

      this.serviceRestOauth.login(this.username,this.password).subscribe(
        data => {
          localStorage.setItem('username', this.username);
          localStorage.setItem('access_token', data["access_token"]);
          localStorage.setItem('refresh_token', data["refresh_token"]);
          localStorage.setItem('expires_in', data["expires_in"]);
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(["/dashboard"]);
        },
        err => { console.log(err); }
      );

    }
}
