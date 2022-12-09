import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { DonutContext } from "../context/donuts";
import AddToCartButton from "./AddToCartButton";
import "./DonutCart.css";
import FavoriteButton from "./FavoriteButton";

const DonutCart = ({ product }) => {
  const [donut, setDonut] = useState({});
  const { fetchDonut } = useContext(DonutContext);
  useEffect(() => {
    fetchDonut(product.donut.id)
      .then((response) => {
        setDonut(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="donutCart">
      <img alt={donut.name} height="300" src={donut.image} />
      <div className="right">
        <div className="inner-left">
          <h3>{donut.name}</h3>
          <h4>$ {donut.price}</h4>
        </div>
        <div className="inner-right">
          <FavoriteButton product={donut} />
          <div className="bottom">
            <AddToCartButton product={donut} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutCart;
