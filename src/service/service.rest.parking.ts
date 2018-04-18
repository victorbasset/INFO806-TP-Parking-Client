import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestParking {

  public headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

  constructor(private http: HttpClient) {}

  public allParkings() {
    return this.http.get(environment.apiUrl + 'parkings',{headers: this.headers});
  }

  public getParking(id) {
    return this.http.get(environment.apiUrl + 'parkings/' + id,{headers: this.headers});
  }

  public addParking(parking) {
    return this.http.post(environment.apiUrl + 'parkings', parking,{headers: this.headers});
  }

  public deleteParking(id) {
    return this.http.delete(environment.apiUrl + 'parkings/' + id,{headers: this.headers});
  }

  public putParking(parking){
    return this.http.put(environment.apiUrl + 'parkings', parking,{headers: this.headers});
  }

}
