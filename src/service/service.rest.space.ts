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

  public findByParking(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'parking/' + id + '/spaces',{headers: token});
  }

  public putSpace(space) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.put(environment.apiUrl + 'spaces', space,{headers: token});
  }

  public addSpace(space) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiAdminUrl + 'spaces', space,{headers: token});
  }

  public addManySpace(nb, space) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiAdminUrl + 'spaces/' + nb, space,{headers: token});
  }

  public deleteSpace(id){
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.delete(environment.apiAdminUrl + 'spaces/' + id,{headers: token})
  }
}
