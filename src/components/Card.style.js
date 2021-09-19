import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  min-width: 370px;
  padding: 3em;
  border: 2px solid #7c4ff9;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: ${(props) => (props.type && "#7C4FF9") || "none"};
  color: ${(props) => (props.type && "#ffffff") || "#232323"};

  > h2 {
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: 0.165em;
    text-transform: uppercase;

    > .bold {
      font-weight: bold;
      color: ${(props) => (props.type && "#00FAB9") || "#7C4FF9"};
    }
  }

  > .subtext {
    color: ${(props) => (props.type && "#ffffff") || "#787878"};
    font-size: 0.8em;
    font-weight: 500;
    font-style: italic;
  }

  > p {
    color: ${(props) => (props.type && "#ffffff") || "#232323"};
    text-align: center;
    padding: 3em 0;
  }

  @media (max-width: 768px) {
    padding: 2em 1em;
    p {
      font-size: 0.8em;
      padding: 1em 0;
    }
  }
`;
