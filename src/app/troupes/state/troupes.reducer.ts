import { createReducer, on } from "@ngrx/store"
import {
  TroupesState,
  TroupesActions,
} from "."

//= TROUPES REDUCERS ===================
export const troupesReducer = createReducer<TroupesState.TroupesState>(
  TroupesState.initialState,
  on(TroupesActions.toggleShowTroupeColorsAction,
    (state): TroupesState.TroupesState => {
      return {
        ...state,
        showTroupeColors: !state.showTroupeColors
      }
    }
  ),
  on(TroupesActions.loadTroupesSuccess, (state, action) => {
    return {
      ...state,
      troupes: action.troupes
    }
  }),
  on(TroupesActions.loadTroupeSuccess, (state, action) => {
    return {
      ...state,
      selectedTroupe: action.troupe,
      errorMessage: ""
    }
  }),
  on(TroupesActions.loadTroupeFailure,
    (state, action) => {
      return {
        ...state,
        selectedTroupe: null,
        errorMessage: action.errorMessage
      }
    }
  )

)

//=================================