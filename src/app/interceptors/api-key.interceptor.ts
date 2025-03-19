import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export function apiKeyInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const newReq = req.clone({
    headers: req.headers.append('x-api-key', environment.apiKey),
  });
  return next(newReq);
}
