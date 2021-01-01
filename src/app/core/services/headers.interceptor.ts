import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headerReq = req.clone({
      setHeaders: {
        "Content-Type": "application/json",
        "A-header-for-you": "fun time bouncy castles"
      }
    }
    )
    return next.handle(headerReq)
  }

}
