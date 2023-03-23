import React from "react";
import HomeBlock from "./homeBlock.tsx";
import SearchBlock from "./search.tsx";
import Sneakers from "./sneakers/sneakers.tsx";
import { useSelector } from "react-redux";
import Basket from "../basket/basket.tsx";

interface IBasketProp {
  isBasket: boolean;
  changeBasket: any;
}

const Home = function () {
  const flag = useSelector((state: IBasketProp) => state.changeBasket.isBasket);
  return (
    <div className="home">
      <HomeBlock />
      <SearchBlock />
      <Sneakers />
      {flag && (<Basket /> || <></>)}
    </div>
  );
};

export default Home;
