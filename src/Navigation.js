import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

function Navigation(props) {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        {props.cartCount === 0 ? (
          ""
        ) : (
          <NavbarText>Cart : {props.cartCount}</NavbarText>
        )}
      </Navbar>
    </div>
  );
}

export default Navigation;
