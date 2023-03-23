import React from "react";
import Card from "./card.tsx";
import { sneakers } from "./data";
import { useSelector } from "react-redux";

interface ISneakers {
  img: string;
  des: string;
  price: string;
  price_num: number;
  id: number;
}
interface IFocusProp {
  isFocus: boolean;
  changeFocus: any;
}
interface ISearchSneak {
  searchSneak: Array<Object>;
  searchingSneak: any;
}
const Sneakers = function () {
  const searchSneak = useSelector(
    (state: ISearchSneak) => state.searchingSneak.searchSneak
  );
  const focus = useSelector((state: IFocusProp) => state.changeFocus.isFocus);
  return (
    <div className="sneakers">
      {(focus && (
        <>
          {searchSneak.map(({ img, des, price, price_num, id }: ISneakers) => (
            <Card
              img={img}
              des={des}
              price={price}
              price_num={price_num}
              id={id}
            />
          ))}
        </>
      )) || (
        <>
          {sneakers.map(({ img, des, price, price_num, id }: ISneakers) => (
            <Card
              img={img}
              des={des}
              price={price}
              price_num={price_num}
              id={id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Sneakers;
