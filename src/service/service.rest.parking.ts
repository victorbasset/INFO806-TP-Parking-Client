import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestParking {

  constructor(private http: HttpClient) {}

  public allParkings() {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'parkings',{headers: token});
  }

  public getParking(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(environment.apiUrl + 'parkings/' + id,{headers: token});
  }

  public addParking(parking) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(environment.apiAdminUrl + 'parkings', parking,{headers: token});
  }

  public deleteParking(id) {
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.delete(environment.apiAdminUrl + 'parkings/' + id,{headers: token});
  }

  public putParking(parking){
    let token = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.put(environment.apiAdminUrl + 'parkings', parking,{headers: token});
  }
}
