import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact" id="contact">
        <h3>Contact Us</h3>
        <hr />
        <p>
          Thank you for visiting the Donut® web site. If you would like to speak
          to a live representative, please call us at: 1-800-000-0000
          Monday-Friday 8:30 AM - 6:00 PM Eastern Time. IF YOU ARE REPORTING A
          PROBLEM WITH ONE OF OUR PRODUCTS, PLEASE BE SURE TO INCLUDE YOUR
          TELEPHONE NUMBER WHERE YOU CAN BE REACHED DURING THE DAY, SO WE CAN
          CONTACT YOU FOR FURTHER INFORMATION.
        </p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Number" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Comment" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
