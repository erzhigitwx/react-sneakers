const defaultState = {
  isFocus: false,
};

const CHANGE_FOCUS = "CHANGE_FOCUS";

export const changeFocus = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FOCUS:
      return { ...state, isFocus: action.payload };
    default:
      return state;
  }
};

export const focusActionCreator = (payload) => ({
  type: CHANGE_FOCUS,
  payload,
});
