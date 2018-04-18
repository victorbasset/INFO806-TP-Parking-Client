import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestUser {

  constructor(private http: HttpClient) {}

  public all() {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'users',{headers: token});
  }

  public register(user) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiUrl + 'users/register',user,{headers: token});
  }

  public login(user) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiUrl + 'users/login',user,{headers: token});
  }

  public getUser(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'users/' + id,{headers: token});
  }

  public getMe(token) {
    return this.http.get(environment.apiUrl + 'users/me',{headers:  new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }
}
