import styled from "styled-components";

export const Widgets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: ${(props) => (props.transparent && "none") || "#fff"};
  border: ${(props) => (props.transparent && "2px solid #FBFBFB;") || "none"};
  color: ${(props) => (props.transparent && "#ffffff") || "#000000"};
  width: 250px;
  border-radius: 30px;
  text-align: center;
  margin: 2em 0;
  transform: ${(props) => (props.small && "scale(.9)") || "scale(1)"};

  > img {
    width: 70px;
    filter: ${(props) =>
      (props.transparent && "brightness(0) invert(1);") || "none"};
  }
  > h2 {
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => (props.transparent && "#ffffff") || "#2a084f"};
    margin-top: 1em;
  }
  > p {
    font-size: 0.8em;
    padding: 0 1.5em;
  }
`;
