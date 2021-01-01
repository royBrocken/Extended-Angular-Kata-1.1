import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable, of } from 'rxjs'
import { TroupesComponent } from './troupes.component'

export class TroupesRouteGuard implements CanDeactivate<TroupesComponent> {
  canDeactivate(
    component: TroupesComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("TroupesRouteGuard firing", component)
    return confirm("You want to go? - from TroupesRouteGuard ")
  }

}