import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class InterceptorRefreshToken implements HttpInterceptor {


  constructor(private inj: Injector, private http: HttpClient){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).catch((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          new Promise((resolve) => {
            let body = new URLSearchParams();
            body.set('client_id', environment.client_id);
            body.set('client_secret', environment.client_secret);
            body.set('grant_type', 'refresh_token');
            body.set('refresh_token', localStorage.getItem('refresh_token'));

            let options = {
              headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            };

            this.http.post(environment.apiBaseUrl + 'oauth/token', body.toString(), options).subscribe(
              data => { resolve({ result: data })
              });

          }).then(
            ({result}) => {
              localStorage.setItem('access_token', result["access_token"]);
              localStorage.setItem('refresh_token', result["refresh_token"]);
              localStorage.setItem('expires_in', result["expires_in"]);
              let req = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + result["access_token"])
              });
              return next.handle(req);
          });
        }
      }
      return Observable.throw(err);
    });

  }
}
