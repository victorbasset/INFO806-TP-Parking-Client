import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestSpace {


  constructor(private http: HttpClient) {}

  public allSpaces() {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'spaces',{headers: token});
  }

  public getSpace(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'spaces/' + id,{headers: token});
  }

  public addSpace(space) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiUrl + 'spaces', space,{headers: token});
  }

  public addManySpace(nb, space) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiUrl + 'spaces/' + nb, space,{headers: token});
  }

  public deleteSpace(id){
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.delete(environment.apiUrl + 'spaces/' + id,{headers: token})
  }

}
