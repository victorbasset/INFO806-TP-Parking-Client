import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestSpace {

  constructor(private http: HttpClient) {}

  public allSpaces() {
    return this.http.get(environment.apiUrl + 'spaces');
  }

  public getSpace(id) {
    return this.http.get(environment.apiUrl + 'spaces/' + id);
  }

  public addSpace(space) {
    return this.http.post(environment.apiUrl + 'spaces', space);
  }

  public addManySpace(nb, space) {
    return this.http.post(environment.apiUrl + 'spaces/' + nb, space);
  }

  public deleteSpace(id){
    return this.http.delete(environment.apiUrl + 'spaces/' + id)
  }

}
