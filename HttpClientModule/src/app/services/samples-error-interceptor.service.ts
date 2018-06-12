import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class SamplesErrorInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(catchError((errorResponse: HttpErrorResponse) => {
      if (errorResponse.status === 404) {
        // TODO: Gérer l'erreur
      }
      return Observable.throw(errorResponse);
    }));
  }
}