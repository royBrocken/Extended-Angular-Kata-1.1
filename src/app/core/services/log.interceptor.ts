import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          console.log(`response interceptor acting on ${event.url}`)
          console.table(event.body)
          console.log('filtering for Cimerians')
          
            let onlyCimeriansResponseEvent = event.clone({
              body: event.body.filter(d => d.name === 'Cimerians')
            })
            return onlyCimeriansResponseEvent
          
        }
      })
    )
  }

}