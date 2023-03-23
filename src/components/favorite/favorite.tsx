import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import Card from "../home/sneakers/card.tsx";
import { sneakers } from "../home/sneakers/data.js";
import { Link } from "react-router-dom";
import Header from "../header.tsx";

interface Ifavorite {
  likes: Array<number>;
  check: any;
}

const Favorite = function () {
  const likes = useSelector((state: Ifavorite) => state.check.likes);
  return (
    <div className="favorite">
      {(likes.length > 0 && <Header title={"Мои закладки"} />) || <></>}
      <div className="favorite-content">
        {(likes.length > 0 && (
          <>
            {sneakers.map(({ img, des, price, price_num, id }) => (
              <>
                {(likes.includes(id) && (
                  <div className="favorite-card">
                    <Card
                      img={img}
                      des={des}
                      price={price}
                      price_num={price_num}
                      id={id}
                    />
                  </div>
                )) || <></>}
              </>
            ))}
          </>
        )) || (
          <div className="favorite-empty">
            <img src={require("../../assets/smile.png")} alt="saad;(" />
            <h3 className="favorite-empty__title">{"Закладок нет :("}</h3>
            <p className="favorite-empty__p">
              Вы ничего не добавляли в закладки
            </p>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span>
                <li className="basket-empty__button">
                  <span>
                    <AiOutlineArrowLeft className="basket-empty__icon" />
                  </span>
                  Вернуться назад
                </li>
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
