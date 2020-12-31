import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { exhaustMap, map, mergeMap, switchMap, catchError, shareReplay } from 'rxjs/operators'
import { DataService } from '../../core/services/data.service'
import * as TroupeActions from './troupes.actions'

@Injectable()
export class TroupesEffects {
  constructor(
    private actions$: Actions,
    private data: DataService
  ) { }

  loadTroupes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TroupeActions.loadTroupes),
      switchMap(() => {
        return this.data.getAllTroupes().pipe(
          map(troupes => TroupeActions.loadTroupesSuccess({ troupes })),
          catchError(errorMessage => {
            return of(TroupeActions.loadTroupeFailure({errorMessage}))
          })
        )
      })
    )
  })

  loadTroupe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TroupeActions.loadTroupe),
      switchMap((params) => {
        return this.data.selectTroupe(params.id).pipe(
          map(troupe => TroupeActions.loadTroupeSuccess({ troupe })),
          catchError((errorMessage: string) => {
            return of(TroupeActions.loadTroupeFailure({ errorMessage }))
          })
        )
      }),

    )
  })
}