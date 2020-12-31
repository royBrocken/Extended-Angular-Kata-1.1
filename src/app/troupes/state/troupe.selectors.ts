import { createFeatureSelector, createSelector } from "@ngrx/store"
import { TroupesState } from './'

//= TROUPES SELECTORS ======================
export const getTroupesState = createFeatureSelector<TroupesState.TroupesState>("troupes")

export const getShowTroupeColors = createSelector(
  getTroupesState,
  s => s.showTroupeColors
)

export const getTroupes = createSelector(
  getTroupesState, 
  s => s.troupes
)

export const getSelectedTroupe = createSelector(
  getTroupesState,
  s => s.selectedTroupe
)

export const getLoadFailure = createSelector(
  getTroupesState,
  s => s.errorMessage
)

