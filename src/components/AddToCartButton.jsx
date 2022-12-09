import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/carts";
import "./AddToCartButton.css";

const AddToCartButton = ({ product }) => {
  const { cart, addToCart, removeFromCart, fetchCart, getCartItem } =
    useContext(CartContext);

  const [cartItem, setCartItem] = useState({});
  const [cartQuanity, setCartQuantity] = useState(0);

  useEffect(() => {
    getCartItem(product.id)
      .then((response) => {
        setCartItem(response);
        setCartQuantity(response.quantity);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cartQuanity]);

  return (
    <div className="add-to-cart-button">
      <div className="addToCartContainer">
        {cartItem?.quantity ? (
          <div>
            <button
              className="increase"
              onClick={() => {
                addToCart(product?.id)
                  .then((response) => {
                    setCartQuantity(response.quantity);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              +
            </button>
            {cartQuanity}
            <button
              className="decrease"
              onClick={() => {
                removeFromCart(product?.id)
                  .then((response) => {
                    setCartQuantity(response.quantity);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              -
            </button>
          </div>
        ) : (
          <button
            className="addToCart"
            onClick={() => {
              addToCart(product?.id)
                .then((response) => {
                  setCartQuantity(response.quantity);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
