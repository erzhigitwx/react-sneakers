import { combineReducers, createStore } from "redux";
import { check } from "./check";
import { changeFocus } from "./focus";
import { changeInputValue } from "./inputValue";
import { changeBasket } from "./isBasket";
import { toOrderSneakers } from "./ordered";
import { changePrice } from "./price";
import { searchingSneak } from "./searchSneak";

const rootReducer = combineReducers({
  check: check,
  changeBasket: changeBasket,
  changePrice: changePrice,
  changeFocus: changeFocus,
  changeInputValue: changeInputValue,
  searchingSneak: searchingSneak,
  toOrderSneakers: toOrderSneakers,
});

export const store = createStore(rootReducer);
