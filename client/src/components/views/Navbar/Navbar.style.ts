import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .7rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navigationBar.primary};
  z-index: 1;

`;

export const Navilink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.7rem;

  &:hover {
    color: ${({ theme }) => theme.colors.navigationBar.secondary};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.size.mobile.lg};
  } ;
`;

