import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class InterceptorRefreshToken implements HttpInterceptor {


  constructor(private inj: Injector, private http: HttpClient, private router: Router){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).catch((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
              localStorage.clear();
              return this.router.navigate(["login"]);
            }
          }
      return Observable.throw(err);
    });
  }
}
