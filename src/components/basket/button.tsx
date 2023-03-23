import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { basketActionCreator } from "../../store/isBasket";

interface IBasketProp {
  isBasket: boolean;
  changeBasket: any;
}

const Button = function ({ text }) {
  const dispatch = useDispatch();
  const flag = useSelector((state: IBasketProp) => state.changeBasket.isBasket);

  return (
    <li
      className="basket-empty__button"
      onClick={() => dispatch(basketActionCreator(!flag))}
    >
      <span>
        <AiOutlineArrowLeft className="basket-empty__icon" />
      </span>
      {text}
    </li>
  );
};

export default Button;
