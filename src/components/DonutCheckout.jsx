import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { DonutContext } from "../context/donuts";
import AddToCartButton from "./AddToCartButton";
import "./DonutCheckout.css";

const DonutCheckout = ({ product }) => {
  const { fetchDonut } = useContext(DonutContext);
  const [donut, setDonut] = useState({});

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
    <div className="donut-checkout">
      <img alt={donut.name} height="300" src={donut.image} />
      <div className="right">
        <div className="inner-left">
          <h3>{donut.name}</h3>
        </div>
        <div className="inner-right">
          <h4>$ {donut.price}</h4>
          <div className="bottom">
            <AddToCartButton product={donut} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutCheckout;
