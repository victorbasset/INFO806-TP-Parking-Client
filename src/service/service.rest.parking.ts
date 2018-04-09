import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestParking {

  constructor(private http: HttpClient) {}

  public allParkings() {
    return this.http.get(environment.apiUrl + 'parkings');
  }

  public getParking(id) {
    return this.http.get(environment.apiUrl + 'parkings/' + id);
  }

  public addParking(parking) {
    return this.http.post(environment.apiUrl + 'parkings', parking);
  }

  public deleteParking(id) {
    return this.http.delete(environment.apiUrl + 'parkings/' + id);
  }

  public putParking(parking){
    return this.http.put(environment.apiUrl + 'parkings', parking);
  }

}
