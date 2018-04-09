import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ServiceRestUser } from '../../service/service.rest.user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,private serviceRestUser: ServiceRestUser) {}

    ngOnInit() {
      this.serviceRestUser.all().subscribe(
        data => { console.log(data); },
        err => { console.log(err); }
      );
    }

    onLoggedin() {
      localStorage.setItem('isLoggedin', 'true');
    }
}
