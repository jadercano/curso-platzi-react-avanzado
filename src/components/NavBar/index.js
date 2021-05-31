import React from "react";
import { StyledNavLink } from "./styles";
import { Nav } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/">
        <MdHome size={SIZE} />
      </StyledNavLink>
      <StyledNavLink to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </StyledNavLink>
      <StyledNavLink to="/user">
        <MdPersonOutline size={SIZE} />
      </StyledNavLink>
    </Nav>
  );
};
