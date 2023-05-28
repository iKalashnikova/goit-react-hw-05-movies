import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from "react";
import {LayoutContainer, HeaderStyle, NavList, NavItem, NavLinkStyled, MainStyle} from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <HeaderStyle>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavLinkStyled>
        </NavList>
      </HeaderStyle>
          <MainStyle>
            <Suspense fallback={<div>Loading...</div>}>
             <Outlet />
            </Suspense>
      </MainStyle>
      {/* <footer>Footer</footer> */}
    </LayoutContainer>
  );
};

export default Layout;
