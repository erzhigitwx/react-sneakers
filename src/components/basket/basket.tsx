import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeFavoriteActionCreator } from "../../store/check";
import { basketActionCreator } from "../../store/isBasket";
import { sneakers } from "../home/sneakers/data";
import { decrementActionCreator } from "../../store/price";
import Button from "./button.tsx";
import { orderSneakActionCreator } from "../../store/ordered.js";

interface IBasketProp {
  isBasket: boolean;
  changeBasket: any;
}
interface ICheckState {
  favorites: Array<number>;
  check: any;
}
interface IPriceProp {
  price: number;
  changePrice: any;
}

const Basket = function () {
  const flag = useSelector((state: IBasketProp) => state.changeBasket.isBasket);
  const favorites = useSelector((state: ICheckState) => state.check.favorites);
  const dispatch = useDispatch();
  const newSneakers = [];
  const price = useSelector((state: IPriceProp) => state.changePrice.price);
  const [sendToBuy, setSendToBuy] = useState<boolean>(false);

  for (let item of sneakers) {
    if (favorites.includes(item.id)) {
      newSneakers.push(item);
    }
  }
  function sendOrder() {
    setSendToBuy(!sendToBuy);
    for (let iter of favorites) {
      dispatch(orderSneakActionCreator(iter));
    }
  }
  function removeHandler(id, price__num) {
    dispatch(removeFavoriteActionCreator(id));
    dispatch(decrementActionCreator(price__num));
  }
  function clickBackHandler() {
    for (let i of favorites) {
      dispatch(removeFavoriteActionCreator(i));
    }
    dispatch(decrementActionCreator(price));
  }
  const account = (price * 5) / 100;
  const toSell = price - account;
  return (
    <>
      <div className="basket">
        <h1 className="basket-title">Корзина</h1>
        {(sendToBuy && (
          <div className="order">
            <img src={require("../../assets/order.png")} alt="succes" />
            <h4 className="order-title">Заказ оформлен!</h4>
            <p>{`Ваш заказ #18 скоро будет передан курьерской доставке`}</p>
            <div onClick={clickBackHandler}>
              <Button text={"Вернуться назад"} />
            </div>
          </div>
        )) || (
          <>
            {(favorites.length >= 1 && (
              <div className="basket-content__wrapper">
                <div className="basket-content">
                  {newSneakers.map(({ img, des, price, id, price_num }) => (
                    <div className="basket-card">
                      <img src={img} alt="sneak" />
                      <div className="basket-card__text">
                        <p className="basket-card__text-des">{des}</p>
                        <h1 className="basket-card__text-price">{price}</h1>
                      </div>

                      <CiSquareRemove
                        className="basket-card__remove"
                        onClick={() => removeHandler(id, price_num)}
                      />
                    </div>
                  ))}
                </div>
                <div className="basket-buy">
                  <div className="basket-buy__first">
                    <p>Итого:</p>
                    <span className="dotted" />
                    <span className="basket-buy__first-acc">{`${toSell.toFixed(
                      0
                    )} руб.`}</span>
                  </div>
                  <div className="basket-buy__second">
                    <p>Налог 5%:</p>
                    <span className="dotted" />
                    <span className="basket-buy__second-acc">{`${account.toFixed(
                      0
                    )} руб.`}</span>
                  </div>

                  <div
                    className="basket-buy__button-container"
                    onClick={sendOrder}
                  >
                    <li className="basket-buy__button">
                      Оформить заказ
                      <span>
                        <AiOutlineArrowRight className="basket-buy__icon" />
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            )) || (
              <div className="basket-empty">
                <img src={require("../../assets/empty.png")} alt="empty" />
                <h3 className="basket-empty__title">Корзина пустая</h3>
                <p className="basket-empty__p">
                  Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </p>
                <Button text={"Вернуться назад"} />
              </div>
            )}{" "}
          </>
        )}
      </div>

      <div
        className="blur"
        onClick={() => dispatch(basketActionCreator(!flag))}
      ></div>
    </>
  );
};

export default Basket;
