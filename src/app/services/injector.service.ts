import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn:"root"
})
export class ApiKeyInterceptor implements HttpInterceptor {
  private apiKey = environment.apiKey;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'app-id': this.apiKey
      }
    });

    return next.handle(request);
  }
}
