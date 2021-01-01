import { Inject, Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { map, switchMap, catchError } from 'rxjs/operators'
import * as TroupeActions from './troupes.actions'
import { OLD_DATA_SERVICE } from '../../core/core.module'
import { DataService } from '../../core/services/data.service'

@Injectable()
export class TroupesEffects {
  constructor(
    private actions$: Actions,
    @Inject(OLD_DATA_SERVICE) private data: DataService
  ) { }

  loadTroupes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TroupeActions.loadTroupes),
      switchMap(() => {
        return this.data.getAllTroupes().pipe(
          map(troupes => TroupeActions.loadTroupesSuccess({ troupes })),
          catchError(errorMessage => {
            return of(TroupeActions.loadTroupeFailure({ errorMessage }))
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