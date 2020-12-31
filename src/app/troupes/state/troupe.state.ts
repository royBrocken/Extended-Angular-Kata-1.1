import { Troupe } from "app/models/troupe.model"

export interface TroupesState {
  troupes: Troupe[],
  showTroupeColors: boolean,
  selectedTroupe: Troupe,
  errorMessage: string
}

export const initialState: TroupesState = {
  troupes: [],
  showTroupeColors: false,
  selectedTroupe: null,
  errorMessage: ""
}

