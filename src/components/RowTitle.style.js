import styled from "styled-components";

export const RowTitle = styled.div`
  > h1 {
    font-size: 2.5em;
    color: #2a084f;
    text-align: center;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2em;
    }
  }
`;
