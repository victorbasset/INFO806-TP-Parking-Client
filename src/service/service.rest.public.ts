import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestPublic {

  constructor(private http: HttpClient) {}

  public register(user) {
    return this.http.post(environment.apiBaseUrl + 'register', user);
  }
}
