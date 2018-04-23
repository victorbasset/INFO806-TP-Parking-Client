import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestOauth {

  constructor(private http: HttpClient) {}

  public login(username,password) {

    return new Promise((resolve) => {

      let body = new URLSearchParams();
      body.set('username', username);
      body.set('password', password);
      body.set('client_id', environment.client_id);
      body.set('client_secret', environment.client_secret);
      body.set('grant_type', 'password');

      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };

      this.http.post(environment.apiBaseUrl + 'oauth/token', body.toString(), options).subscribe(
        data => { resolve({ result: data })
      });
    });
  }

  public refresh(){
    let body = new URLSearchParams();
    body.set('client_id', environment.client_id);
    body.set('client_secret', environment.client_secret);
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', localStorage.getItem('refresh_token'));

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post(environment.apiBaseUrl + 'oauth/token', body.toString(), options).subscribe(
      data => {
        localStorage.setItem('access_token', data["access_token"]);
        localStorage.setItem('refresh_token', data["refresh_token"]);
        localStorage.setItem('expires_in', data["expires_in"]);
      });
  }
}
