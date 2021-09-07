import React from "react";
import PropTypes from "prop-types";

import "./welcome.scss";

const Welcome = () => (
  <div className="welcome">
    <div className="welcome__left">
      <h1>
        Making business processes{" "}
        <span className="welcome__green">easier.</span>
      </h1>
      <p className="welcome__subtext">
        Cadprime aims to promote efficient ways in improving business operations
        through technological advancement and intuitive design.
      </p>
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
