import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServiceRestUser {

  constructor(private http: HttpClient) {}

  public all() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users').subscribe(
        data => { resolve(data); },
        err => { reject(err); }
      );
    });
  }

}
