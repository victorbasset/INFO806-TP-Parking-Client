import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {ServiceRestUser} from '../../service/service.rest.user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,private serviceRestUser: ServiceRestUser) {}

    ngOnInit() {
      console.log("here");
      this.serviceRestUser.all().then(
        result => {console.log(result);},
        error => {console.log(error);}
      );
    }

    onLoggedin() {
      localStorage.setItem('isLoggedin', 'true');
    }
}
