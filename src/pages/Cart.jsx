import React, { useContext, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import DonutCart from "../components/DonutCart";
import { CartContext } from "../context/cart";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return !cart.length ? (
    <h2>No items in Cart</h2>
  ) : (
    <div className="cart">
      <div>
        <h5>Check out :</h5>
        <a href="/checkout">Checkout {cart.length} Items</a>
      </div>
      <div className="cartDonuts">
        {cart.map((product) => {
          return <DonutCart key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
