import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

// assets
import { ReactComponent as TogglerIcon } from "../../assets/icons/bars.svg";

// components
import Articles from "./Articles";
import { colors } from "../../utils/cssvars";

export default function Header() {
  return (
    <Router>
      <Navbar>
        <NavbarTop>
          <NavbarBrand to="/">devnewsbucket</NavbarBrand>
          <Toggler />
        </NavbarTop>
        <NavbarBottom>
          <NavbarLink to="/">home</NavbarLink>
          <NavbarLink to="/articles">articles</NavbarLink>
        </NavbarBottom>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
      </Switch>
    </Router>
  );
}

const Navbar = styled.nav`
  max-width: 100%;
  min-height: 60px;
  background: ${colors.primary};
  box-shadow: -2px 2px 15px ${colors.primaryDimmed};
  display: flex;
  flex-direction: column;
  @media all and screen(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const NavbarLinks = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1.15px;
  font-size: ${20 / 16}rem;
`;

const NavbarBrand = styled(NavbarLinks)`
  font-weight: 700;
  color: ${colors.secondary};
`;

const Toggler = styled(TogglerIcon)`
  cursor: pointer;
  @media all and screen(min-width: 768px) {
    display: none;
  }
`;

const NavbarBottom = styled.div`
  background: ${colors.secondary};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media all and screen(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NavbarLink = styled(NavbarLinks)`
  font-weight: 500;
  color: ${colors.primary};
  display: block;
  border-bottom: solid 1px ${colors.primary};
  padding: 15px;

  &:last-child {
    border: none;
  }
`;
