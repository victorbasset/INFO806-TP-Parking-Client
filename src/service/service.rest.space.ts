import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestSpace {

  public headers = new HttpHeaders().set('Authorization', 'Bearer' + localStorage.getItem('access_token'));

  constructor(private http: HttpClient) {}

  public allSpaces() {
    return this.http.get(environment.apiUrl + 'spaces',{headers: this.headers});
  }

  public getSpace(id) {
    return this.http.get(environment.apiUrl + 'spaces/' + id,{headers: this.headers});
  }

  public addSpace(space) {
    return this.http.post(environment.apiUrl + 'spaces', space,{headers: this.headers});
  }

  public addManySpace(nb, space) {
    return this.http.post(environment.apiUrl + 'spaces/' + nb, space,{headers: this.headers});
  }

  public deleteSpace(id){
    return this.http.delete(environment.apiUrl + 'spaces/' + id,{headers: this.headers})
  }

}
