const defaultState = {
  likes: [],
  favorites: [],
};

const ADD_LIKE = "ADD_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";
const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const check = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return { ...state, likes: [...state.likes, action.payload] };
    case REMOVE_LIKE:
      return {
        ...state,
        likes: state.likes.filter((item) => item !== action.payload),
      };
    case ADD_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export const addLikeActionCreator = (payload) => ({
  type: ADD_LIKE,
  payload,
});
export const removeLikeActionCreator = (payload) => ({
  type: REMOVE_LIKE,
  payload,
});

export const addFavoriteActionCreator = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});
export const removeFavoriteActionCreator = (payload) => ({
  type: REMOVE_FAVORITES,
  payload,
});
