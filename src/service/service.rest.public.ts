import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestPublic {

  constructor(private http: HttpClient) {}

  public register(user) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiUrl + 'register', user,{headers: token});
  }
}
