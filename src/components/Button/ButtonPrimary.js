import React from "react";
import PropTypes from "prop-types";

const Button = () => <div className="btn">check our products</div>;

Button.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
};

export default Button;
