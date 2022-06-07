import React from "react";
import styled from "styled-components";
import { blitzPizzaTheme } from "../styles/colors";
import { Title } from "../styles/title";
const NavbarStyled = styled.div`
  background-color: ${blitzPizzaTheme};
  padding: 10px;
  position: fixed;
  width: 100%;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: #f44336;
  text-shadow: 1px 1px 1px black;
`;

export function NavBar() {
  return (
    <NavbarStyled>
      <Logo>Blitz Pizza Co. 🍕</Logo>
    </NavbarStyled>
  );
}
