import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./welcome.scss";
import Button from "../Button/ButtonPrimary";

const Welcome = ({ image, heading, subheading }) => (
  <div
    className="welcome"
    style={{ backgroundImage: `url(${image.childImageSharp.fluid.src})` }}
  >
    <div className="welcome__left">
      <h1>
        {heading} <span className="welcome__green">easier.</span>
      </h1>
      <p className="welcome__subtext">{subheading}</p>
      <Button />
    </div>
  </div>
);

Welcome.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Welcome;
