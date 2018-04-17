import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestOauth {

  constructor(private http: HttpClient) {}

  public login(username,password) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('client_id', environment.client_id);
    body.set('client_secret', environment.client_secret);
    body.set('grant_type', 'password');

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(environment.apiBaseUrl + 'oauth/token', body.toString(), options);
  }

}
