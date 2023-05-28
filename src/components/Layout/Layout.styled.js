import styled from "@emotion/styled";
import { NavLink,  } from 'react-router-dom';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderStyle = styled.header`
  background-color: #f1f1f1;
  padding: 20px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 32px;
  transition: color 0.3s;

  &:hover {
    color: #888;
  }

  &.active {
    color: #ff0000;
  }
`;

export const MainStyle = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

// export const Footer = styled.footer`
//   background-color: #f1f1f1;
//   padding: 20px;
//   text-align: center;
// `;
