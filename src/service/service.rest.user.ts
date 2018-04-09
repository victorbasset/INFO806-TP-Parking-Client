import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestUser {

  constructor(private http: HttpClient) {}

  public all() {
     return this.http.get(environment.apiUrl + 'users');
  }

  public register(user) {
    return this.http.post(environment.apiUrl + 'users/register',user);
  }

  public login(user) {
    return this.http.post(environment.apiUrl + 'users/login',user);
  }

  public getUser(id) {
    return this.http.get(environment.apiUrl + 'users/' + id);
  }

}
