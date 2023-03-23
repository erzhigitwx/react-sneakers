import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { focusActionCreator } from "../../store/focus.js";
import { inputActionCreator } from "../../store/inputValue.js";
import {
  addSneakActionCreator,
  removeAllSneaksActionCreator,
} from "../../store/searchSneak.js";
import { sneakers } from "./sneakers/data.js";

interface IInputProp {
  value: string;
  changeInputValue: any;
}

const SearchBlock = function () {
  const dispatch = useDispatch();
  const inputValue = useSelector(
    (state: IInputProp) => state.changeInputValue.value
  );
  function focusHandler() {
    dispatch(focusActionCreator(true));
  }
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActionCreator(e.target.value.toLowerCase()));
    const filteredSneakers = sneakers.filter(({ des }) =>
      des.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch(removeAllSneaksActionCreator());
    filteredSneakers.forEach((sneaker) => {
      dispatch(addSneakActionCreator(sneaker));
    });
  }
  return (
    <div className="search-block">
      <h1 className="search-block__title">Все кроссовки</h1>
      <input
        type="text"
        className="search-block__input"
        placeholder="Поиск..."
        value={inputValue}
        onFocus={focusHandler}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default SearchBlock;
