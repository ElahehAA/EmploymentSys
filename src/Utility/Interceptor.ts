import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// export abstract class HttpHandler {
//   abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
// }
@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var token=localStorage.getItem('token');
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return next.handle(req);
  }


}

