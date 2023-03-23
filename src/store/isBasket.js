const defaultState = {
  isBasket: false,
};

const CHANGE_BASKET = "CHANGE_BASKET";

export const changeBasket = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BASKET:
      return { ...state, isBasket: action.payload };
    default:
      return state;
  }
};

export const basketActionCreator = (payload) => ({
  type: CHANGE_BASKET,
  payload,
});
