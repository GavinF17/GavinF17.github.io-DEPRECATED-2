import React, {useState} from 'react';
import Navbar from "reactstrap/es/Navbar";
import {NavbarToggler} from "reactstrap";
import Collapse from "reactstrap/es/Collapse";
import Nav from "reactstrap/es/Nav";
import NavItem from "reactstrap/es/NavItem";
import NavLink from "reactstrap/es/NavLink";
import {Link} from "react-router-dom";
import {ThemeToggle} from "./ThemeToggle";
import NavbarText from "reactstrap/es/NavbarText";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <Navbar expand="md" className={"navigation mt-2" + (open ? " open" : "")}>
      <NavbarToggler onClick={toggleNavbar} className={"hamburger hamburger--collapse" + (open ? " is-active" : "")}>
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
      </NavbarToggler>

      <Collapse isOpen={open} navbar>
        <Nav className={"m-0" + (open ? "" : " mr-auto")} navbar>
          <NavItem>
            <NavLink tag={Link} to={"/"}>Gavin Fenton</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/experience"}>Experience</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <ThemeToggle/>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};
