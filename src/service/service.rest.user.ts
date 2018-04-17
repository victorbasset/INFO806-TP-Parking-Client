import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestUser {

  public headers = new HttpHeaders().set('Authorization', 'Bearer' + localStorage.getItem('access_token'));

  constructor(private http: HttpClient) {}

  public all() {
     return this.http.get(environment.apiUrl + 'users',{headers: this.headers});
  }

  public register(user) {
    return this.http.post(environment.apiUrl + 'users/register',user,{headers: this.headers});
  }

  public login(user) {
    return this.http.post(environment.apiUrl + 'users/login',user,{headers: this.headers});
  }

  public getUser(id) {
    return this.http.get(environment.apiUrl + 'users/' + id,{headers: this.headers});
  }

  public getMe(token) {
    return this.http.get(environment.apiUrl + 'users/me',{headers:  new HttpHeaders().set('Authorization', 'Bearer' + token)});
  }
}
