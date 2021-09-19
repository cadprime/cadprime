import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 1em;
  border: none;
  border-radius: 10px;
  color: rgb(124, 79, 249);
  padding: 0.8em 3rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  width: max-content;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    ${(props) =>
      props.type === "secondary"
        ? "background-color: #7C4FF9; color: #ffffff; box-shadow: 0px 12px 31px -10px rgba(124, 79, 249, 0.5)"
        : "background-color: #00FCCF; color: #7C4FF9; box-shadow: 0px 12px 31px -10px rgba(82, 250, 216, 0.54)"}
  }

  ${(props) =>
    props.type === "secondary"
      ? "background-color: #00FCCF; color: #7C4FF9; box-shadow: 0px 12px 31px -10px rgba(82, 250, 216, 0.54)"
      : "background-color: #7C4FF9; color: #ffffff; box-shadow: 0px 12px 31px -10px rgba(124, 79, 249, 0.5)"}
`;

const Button = ({ text, type }) => (
  <StyledButton type={type}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
