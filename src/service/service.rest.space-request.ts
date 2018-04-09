import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestSpaceRequest {

  constructor(private http: HttpClient) {}

  public allRequests() {
    return this.http.get(environment.apiUrl + 'space-requests');
  }

  public addRequest(spaceRequest) {
    return this.http.post(environment.apiUrl + 'space-requests',spaceRequest);
  }

  public acceptRequest(id) {
    return this.http.get(environment.apiUrl + 'space-requests/accept/' + id);
  }

  public rejectRequest(id) {
    return this.http.get(environment.apiUrl + 'space-requests/reject/' + id);
  }

}
