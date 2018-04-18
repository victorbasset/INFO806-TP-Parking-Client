import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestSpaceRequest {

  constructor(private http: HttpClient) {}

  public allRequests() {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'space-requests',{headers: token});
  }

  public addRequest(spaceRequest) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiUrl + 'space-requests',spaceRequest,{headers: token});
  }

  public acceptRequest(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'space-requests/accept/' + id,{headers: token});
  }

  public rejectRequest(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'space-requests/reject/' + id,{headers: token});
  }

}
