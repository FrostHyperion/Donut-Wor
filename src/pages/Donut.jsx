import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import FavoriteButton from "../components/FavoriteButton";
import { DonutContext } from "../context/donuts";
import "./Donut.css";

const Donut = ({ dispatch, orderList, favourites, favouritesDispatch }) => {
  const { id } = useParams();
  const [donut, setDonut] = useState({});
  const { fetchDonut } = useContext(DonutContext);

  // const [isFavourite, setIsFavourite] = useState(
  //   favourites.get(donut?.id) || false
  // );

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_LIST", payload: donut });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_LIST", payload: donut });
  };

  useEffect(() => {
    fetchDonut(id)
      .then((response) => {
        setDonut(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="details">
      <img src={donut?.image} alt={donut?.name} />
      <div className="right">
        <div className="inner-left">
          <p>{donut?.name}</p>
          <p>$ {donut?.price}</p>
        </div>
        <div className="inner-right">
          <div>
            <FavoriteButton product={donut} />
          </div>
          <AddToCartButton product={donut} />
        </div>
      </div>
    </div>
  );
};

export default Donut;
