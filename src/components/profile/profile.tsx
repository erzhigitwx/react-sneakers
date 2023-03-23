import React from "react";
import { useSelector } from "react-redux";
import Header from "../header.tsx";
import Card from "../home/sneakers/card.tsx";
import { sneakers } from "../home/sneakers/data.js";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface IorderedSneakers {
  orderedSneakers: Array<object>;
  toOrderSneakers: any;
}

const Profile = function () {
  const orderedSneakers = useSelector(
    (state: IorderedSneakers) => state.toOrderSneakers.orderedSneakers
  );

  return (
    <div className="profile">
      {(orderedSneakers.length > 0 && (
        <>
          <Header title={"Мои покупки"} />
          <div className="profile-content">
            {sneakers.map(({ img, des, price, price_num, id }) => (
              <>
                {(orderedSneakers.includes(id) && (
                  <Card
                    img={img}
                    des={des}
                    price={price}
                    price_num={price_num}
                    id={id}
                  />
                )) || <></>}
              </>
            ))}
          </div>
        </>
      )) || (
        <div className="profile-empty">
          <img src={require("../../assets/sadSmile.png")} alt="saad;(" />
          <h3 className="profile-empty__title">{"У вас нет заказов"}</h3>
          <p className="favorite-empty__p">
            Вы нищеброд? Оформите хотя бы один заказ.
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
  );
};

export default Profile;
