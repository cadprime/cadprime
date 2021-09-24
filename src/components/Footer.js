import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import footerLogo from "../img/footer_logo.png";
import footerbg from "../img/footer_bg.png";

const StyledFooter = styled.div`
  background: #2a084f;
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  > .footer__left {
    flex: 1.3;
    display: flex;
    justify-content: left;

    > img {
      width: 170px;
      margin-bottom: 3em;
    }
  }
  > .footer__right {
    flex: 1;
    display: flex;
    flex-direction: column;

    .footer__col {
      margin-bottom: 1em;
      min-width: 10em;

      > h2 {
        text-transform: uppercase;
        color: #00fbc9;
        font-weight: bold;
        margin-bottom: 0.5em;
      }
      > ul li {
        color: #fff;
        line-height: 1.8;
      }
    }
  }

  @media (min-width: 768px) {
    background-image: url("${footerbg}");
    background-size: cover;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    > .footer__right {
      flex-direction: row;
    }
    > .footer__left {
      justify-content: center;

      > img {
        margin-bottom: 0;
      }
    }
  }

  /* > .footer__left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  } */
`;

const Footer = () => (
  <StyledFooter>
    <div className="footer__left">
      <img src={footerLogo} />
    </div>
    <div className="footer__right">
      <div className="footer__col">
        <h2>Company</h2>
        <ul>
          <li>Products</li>
          <li>Features</li>
          <li>Partnerships</li>
          <li>Terms & Privacy </li>
        </ul>
      </div>
      <div className="footer__col">
        <h2>resources</h2>
        <ul>
          <li>About us</li>
          <li>Certifications</li>
        </ul>
      </div>
      <div className="footer__col">
        <h2>follow us</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Footer;
