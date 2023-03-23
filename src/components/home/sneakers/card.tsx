import React, { Suspense } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlusSquare, BsCheckLg } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  removeLikeActionCreator,
  addLikeActionCreator,
  removeFavoriteActionCreator,
  addFavoriteActionCreator,
} from "../../../store/check.js";
import {
  decrementActionCreator,
  incrementActionCreator,
} from "../../../store/price.js";
import Loader from "../../loader.tsx";

interface ICardProps {
  img: string;
  des: string;
  price: string;
  price_num: number;
  id: number;
}
interface ICheckState {
  likes: Array<number>;
  favorites: Array<number>;
  check: any;
}

const Card: React.FC<ICardProps> = ({ img, des, price, price_num, id }) => {
  const likes = useSelector((state: ICheckState) => state.check.likes);
  const favorites = useSelector((state: ICheckState) => state.check.favorites);
  const dispatch = useDispatch();
  const actions = {
    addLike: function addLike() {
      dispatch(removeLikeActionCreator(id));
    },
    removeLike: function removeLike() {
      dispatch(addLikeActionCreator(id));
    },
    addFavorite: function addFavorite() {
      dispatch(removeFavoriteActionCreator(id));
      dispatch(decrementActionCreator(price_num));
    },
    removeFavorite: function removeFavorite() {
      dispatch(addFavoriteActionCreator(id));
      dispatch(incrementActionCreator(price_num));
    },
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className={favorites.includes(id) ? "card card-active" : "card"}>
        {(likes.includes(id) && (
          <AiFillHeart className="card-like" onClick={actions.addLike} />
        )) || (
          <AiOutlineHeart
            className="card-unlike"
            onClick={actions.removeLike}
          />
        )}
        <div className="div">
          <img src={img} alt="sneak" />
        </div>
        <h3 className="card-describe">{des}</h3>
        <div>
          <div className="card-container">
            <p className="card-price">Цена:</p>
            <h3 className="card-price__num">{price}</h3>
          </div>
          {(favorites.includes(id) && (
            <BsCheckLg
              className="card-favorite__active"
              onClick={actions.addFavorite}
            />
          )) || (
            <BsPlusSquare
              className="card-favorite"
              onClick={actions.removeFavorite}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Card;
