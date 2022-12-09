import React from "react";
import InputField from "../InputField";
import "./CheckoutAddressForm.css";

const CheckoutAddressForm = () => {
  return (
    <form className="checkout-address-form">
      <InputField type="text" name="Street No." />
      <InputField type="text" name="City" />
      <InputField type="text" name="Postal Code" />
    </form>
  );
};

export default CheckoutAddressForm;
