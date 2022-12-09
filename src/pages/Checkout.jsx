import React, { useContext, useEffect } from "react";
import { useState } from "react";
import DonutCheckout from "../components/DonutCheckout";
import CheckoutAddressForm from "../components/forms/CheckoutAddressForm";
import { CartContext } from "../context/cart";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const [totalCost, setTotalCost] = useState(0);
  const [netCost, setNetCost] = useState(0);

  useEffect(() => {
    let tempTotalCost = 0;
    let tempNetCost = 0;
    cart.map((cartItem) => {
      const { donut, quantity } = cartItem;
      tempTotalCost += donut.price * quantity;
    });
    setTotalCost(tempTotalCost.toFixed(2));
  }, [cart]);

  const pay = () => {
    fetch("http://localhost:4242/create-checkout-session", {
      method: "post",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="checkout">
      <div className="left">
        <h2>Your Cart</h2>
        <div className="checkout-donuts">
          {cart?.map((product) => {
            return <DonutCheckout key={product.id} product={product} />;
          })}
        </div>
      </div>
      <div className="right">
        <div className="address">
          <div className="from"></div>
          <div className="to">
            <CheckoutAddressForm />
          </div>
        </div>
        <div className="checkout-details">
          <div>
            <span>Total Cost:</span> {totalCost}
          </div>
          <button className="pay-button" onClick={pay}>
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
