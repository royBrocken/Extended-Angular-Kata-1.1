import { createAction, props } from "@ngrx/store"
import { Troupe } from "app/models/troupe.model"

export const toggleShowTroupeColorsAction =
  createAction("[Troupes] toggleShowTroupeColors"
  )

//= loading all troupes =======
export const loadTroupes =
  createAction("[Troupes] loadTroupes")

export const loadTroupesSuccess =
  createAction("[Troupes] loadTroupesSuccess",
    props<{ troupes: Troupe[] }>()
  )

//= load one troupe ==========
export const loadTroupe = createAction(
  "[Troupes] loadTroupe",
  props<{ id: number }>())

export const loadTroupeSuccess = createAction(
  "[Troupes] loadTroupeSuccess",
  props<{ troupe: Troupe }>())


export const loadTroupeFailure = createAction(
  "[Troupes] loadTroupeFailure",
  props<{ errorMessage: string }>()
)