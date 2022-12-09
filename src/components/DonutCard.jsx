import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DonutContext } from "../context/donuts";
import AddToCartButton from "./AddToCartButton";
import "./DonutCard.css";
import FavoriteButton from "./FavoriteButton";

const DonutCard = ({ product }) => {
  const [image, setImage] = useState("");

  const { fetchImage } = useContext(DonutContext);

  useEffect(() => {
    const getImage = async () => {
      console.log(product.image);
      console.log(await fetchImage(product.image));
      setImage(await fetchImage(product.image));
    };
    getImage();
  }, []);

  return (
    <div className="donut">
      <Link to={`/donut/${product.id}`}>
        <img alt={product.name} height="300" src={image} />
      </Link>
      <div className="middle">
        <div>
          <Link to={`/donut/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "baseline",
            }}
          >
            <Link to={`/donut/${product.id}`}>
              <h4>$ {product.price}</h4>
            </Link>
            <div>
              <FavoriteButton product={product} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        {/* <AddToCartButton product={product} /> */}
      </div>
    </div>
  );
};

export default DonutCard;
