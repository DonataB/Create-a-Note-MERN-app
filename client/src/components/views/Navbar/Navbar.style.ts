import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  background: lightblue;
  background-color: ${({ theme }) => theme.colors.navigationBar.primary};
  @media (max-width: 1000px) and (max-height: 500px) {
    height: 85px;
  }
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

