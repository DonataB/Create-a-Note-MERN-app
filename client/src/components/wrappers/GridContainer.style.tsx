import styled from "styled-components";

interface GridColumnProps {
  bigScreenColumns?: number;
  mediumScreenColumns?: number;
  smallScreenColumns?: number;
}

export const GridContainer = styled.div<GridColumnProps>`
  margin: 30px auto;
  display: grid;
  width: 72vw;
  /* height: 80vh; */
  grid-template-columns: ${({ bigScreenColumns }) =>
    bigScreenColumns ? `repeat(${bigScreenColumns}, 1fr)` : `repeat(4, 1fr)`};
  grid-template-rows: auto;
  grid-auto-flow: dense;
  grid-gap: 2em;
  justify-content: center;
  @media (max-width: 1000px) {
    grid-template-columns: ${({ mediumScreenColumns }) =>
      mediumScreenColumns
        ? `repeat(${mediumScreenColumns}, 1fr)`
        : `repeat(3, 1fr)`};
  }
  @media (max-width: 576px) {
    grid-template-columns: ${({ smallScreenColumns }) =>
      smallScreenColumns
        ? `repeat(${smallScreenColumns}, 1fr)`
        : `repeat(2, 1fr)`};
  }
`;
