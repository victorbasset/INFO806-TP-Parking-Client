import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestSpaceRequest {

  public headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

  constructor(private http: HttpClient) {}

  public allRequests() {
    return this.http.get(environment.apiUrl + 'space-requests',{headers: this.headers});
  }

  public addRequest(spaceRequest) {
    return this.http.post(environment.apiUrl + 'space-requests',spaceRequest,{headers: this.headers});
  }

  public acceptRequest(id) {
    return this.http.get(environment.apiUrl + 'space-requests/accept/' + id,{headers: this.headers});
  }

  public rejectRequest(id) {
    return this.http.get(environment.apiUrl + 'space-requests/reject/' + id,{headers: this.headers});
  }

}
