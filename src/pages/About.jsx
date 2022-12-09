import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="card">
        <div className="left">
          <h3>our story</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam
            vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.{" "}
          </p>
        </div>
        <div className="right">
          <h5>WHERE WE ARE TODAY</h5>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla porttitor accumsan tincidunt. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed
            magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Quisque
            velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Nulla porttitor
            accumsan tincidunt. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
