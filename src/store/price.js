const defaultState = {
  price: 0,
};

const PLUS_PRICE = "PLUS_PRICE";
const MINUS_PRICE = "MINUS_PRICE";
export const changePrice = (state = defaultState, action) => {
  switch (action.type) {
    case PLUS_PRICE:
      return { ...state, price: state.price + action.payload };
    case MINUS_PRICE:
      return { ...state, price: state.price - action.payload };
    default:
      return state;
  }
};

export const incrementActionCreator = (payload) => ({
  type: PLUS_PRICE,
  payload,
});

export const decrementActionCreator = (payload) => ({
  type: MINUS_PRICE,
  payload,
});
