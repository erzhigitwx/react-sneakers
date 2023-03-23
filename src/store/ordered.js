const defaultState = {
  orderedSneakers: [],
};

const ADD_SNEAK = "ADD_SNEAK";

export const toOrderSneakers = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SNEAK:
      return {
        ...state,
        orderedSneakers: [...state.orderedSneakers, action.payload],
      };
    default:
      return state;
  }
};

export const orderSneakActionCreator = (payload) => ({
  type: ADD_SNEAK,
  payload,
});
