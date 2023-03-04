import styled from "styled-components";

interface GridColumnProps {
  bigScreenColumns?: number;
  mediumScreenColumns?: number;
  smallScreenColumns?: number;
  mobileScreenColumns?: number;
}

export const GridContainer = styled.div<GridColumnProps>`
  display: grid;
  margin: 0 auto;
  padding: 1rem;
  width: 72vw;
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
  @media (max-width: 820px) {
    grid-template-columns: ${({ smallScreenColumns }) =>
      smallScreenColumns
        ? `repeat(${smallScreenColumns}, 1fr)`
        : `repeat(2, 1fr)`};
  }

  @media (max-width: 550px) {
    width: 50vw;
    grid-template-columns: ${({ mobileScreenColumns }) =>
      mobileScreenColumns
        ? `repeat(${mobileScreenColumns}, 1fr)`
        : `repeat(1, 1fr)`};
  }
`;
