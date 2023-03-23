import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { basketActionCreator } from "../../store/isBasket";

interface IBasketProp {
  isBasket: boolean;
  changeBasket: any;
}
interface IPriceProp {
  price: number;
  changePrice: any;
}

const Navbar = function () {
  const dispatch = useDispatch();
  const flag = useSelector((state: IBasketProp) => state.changeBasket.isBasket);
  const price = useSelector((state: IPriceProp) => state.changePrice.price);
  return (
    <div className="navbar" style={{ textDecoration: "none" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-home">
          <img src={logo} alt="logo" />
          <div className="navbar-home__text">
            <h3 className="navbar-home__text-title">REACT SNEAKERS</h3>

            <p className="navbar-home__text-des">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <div className="navbar-part">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => dispatch(basketActionCreator(!flag))}
        >
          <div className="navbar-basket">
            <SlBasket className="navbar-basket__image" />
            <p className="navbar-basket__price">{price} руб.</p>
          </div>
        </Link>
        <Link to="/favorite" style={{ textDecoration: "none" }}>
          <div className="navbar-favorite">
            <AiOutlineHeart className="navbar-favorite__image" />
          </div>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="navbar-profile">
            <CgProfile className="navbar-profile__image" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
