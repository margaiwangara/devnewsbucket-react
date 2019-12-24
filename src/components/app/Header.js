import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// components
import Articles from "./Articles";

export default function Header() {
  return (
    <Navbar>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Switch>
          <Route exact path="/">
            <Articles />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f1bb;
  box-sizing: border-box;
  padding: 10px 5px;
  box-shadow: -2px 2px 15px rgba(237, 106, 90, 0.5);
`;
