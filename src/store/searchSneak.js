const defaultState = {
  searchSneak: [],
};

const ADD_SNEAK = "ADD_SNEAK";
const REMOVE_SNEAK = "REMOVE_SNEAK";
const REMOVE_ALL_SNEAKS = "REMOVE_ALL_SNEAKS"
export const searchingSneak = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SNEAK:
      return { ...state, searchSneak: [...state.searchSneak, action.payload] };
    case REMOVE_SNEAK:
      return {
        ...state,
        searchSneak: state.searchSneak.filter(
          (item) => item !== action.payload
        ),
      };
    case REMOVE_ALL_SNEAKS:
      return { ...state, searchSneak: [] };
    default:
      return state;
  }
};

export const removeAllSneaksActionCreator = () => ({
  type: REMOVE_ALL_SNEAKS,
});
export const addSneakActionCreator = (payload) => ({
  type: ADD_SNEAK,
  payload,
});
export const removeSneakActionCreator = (payload) => ({
  type: REMOVE_SNEAK,
  payload,
});
