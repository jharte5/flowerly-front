import { GET_ALL_STRAINS, GET_BY_RACE } from "../constants/strainConstants";

const initialState = {
  searchByStrain: [],
  searchByRace: [],
  allStrains: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STRAINS:
      return {
        ...state,
        allStrains: action.payload,
        // searchByStrain: [...state.searchByStrain, action.payload]
      };
    default:
      return state;
  }
}
