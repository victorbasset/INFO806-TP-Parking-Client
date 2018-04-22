import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ServiceRestOauth } from '../../service/service.rest.oauth';
import { ServiceRestPublic } from '../../service/service.rest.public';
import {Router} from '@angular/router';
import { ServiceRestUser } from '../../service/service.rest.user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

  public username:string;
  public password:string;
  public repeat_password:string;

  public error_username:boolean = false;
  public error_password:boolean = false;
  public error_repeat_password:boolean = false;


  constructor(public router: Router,private serviceRestPublic: ServiceRestPublic,private serviceRestOauth: ServiceRestOauth,private serviceRestUser: ServiceRestUser) {}

  ngOnInit() {}

  onSignup() {
    console.log(this.username.length );
    if(this.username.length >= 4 && this.password.length >= 6 && this.password == this.repeat_password) {
      this.error_username = false;
      this.error_password = false;
      this.error_repeat_password = false;
      this.serviceRestPublic.register({"name":this.username,"password":this.password,"role":'USER'}).subscribe(success =>
      {
        this.serviceRestOauth.login(this.username, this.password).then(
          ({result}) => {
            localStorage.setItem('username', this.username);
            localStorage.setItem('access_token', result["access_token"]);
            localStorage.setItem('refresh_token', result["refresh_token"]);
            localStorage.setItem('expires_in', result["expires_in"]);
            localStorage.setItem('isLoggedin', 'true');
            this.serviceRestUser.getMe(result["access_token"]).subscribe(data => {
              localStorage.setItem('id', data["id"]);
              localStorage.setItem('role', data["role"]);
              this.router.navigate(["/dashboard"]);
            });
        });
      });
    }else{
      if(this.username.length < 4){
        this.error_username = true;
      }
      if(this.password.length < 6){
        this.error_password = true;
      }
      if(this.password != this.repeat_password){
        this.error_repeat_password = true;
      }
    }
  }
}
