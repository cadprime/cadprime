import React from "react";
import PropTypes from "prop-types";
import "./welcome.scss";
import { Card } from "../Card.style";
import Button from "../Button";

const Welcome = ({ image, heading, subheading }) => (
  <div
    className="welcome"
    style={{ backgroundImage: `url(${image.childImageSharp.fluid.src})` }}
  >
    <div className="welcome__left">
      {/* <Card>
        <h2>
          payroll <span className="bold"> basic</span>
        </h2>
        <span className="subtext">$20.00/mo.*</span>
        <p>
          Cadprime Payroll Basic provides all basic requirements in generating
          standard payroll procedures. It is an all-in payroll service system
          that will start from biometric integration of your phone to
          payroll-related report generation supported by our system’s
          functional, practical, and all-ages friendly user interface of our
          system.
        </p>
        <Button text="buy now" />
      </Card> */}

      {/* <RowTitle>
        <h1>
          Reinforce your business with <br />
          Cadprime Payroll System!
        </h1>
      </RowTitle> */}

      <h1>
        {heading} <span className="welcome__green">easier.</span>
      </h1>
      <p className="welcome__subtext">{subheading}</p>
      <Button text="check our products" type="secondary" />
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
