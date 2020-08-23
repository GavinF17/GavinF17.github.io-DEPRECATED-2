import React, {useState} from 'react';
import Navbar from "reactstrap/es/Navbar";
import {NavbarToggler} from "reactstrap";
import Collapse from "reactstrap/es/Collapse";
import Nav from "reactstrap/es/Nav";
import NavItem from "reactstrap/es/NavItem";
import NavLink from "reactstrap/es/NavLink";
import {Link} from "react-router-dom";
import {ThemeToggle} from "./ThemeToggle";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <Navbar expand="md" className={"navigation" + (open ? " open" : "")}>
      <NavbarToggler onClick={toggleNavbar}>
        <button className={"hamburger hamburger--collapse" + (open ? " is-active" : "")} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
        </button>
      </NavbarToggler>

      <Collapse isOpen={open} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to={"/"}>
              <NavLink>Gavin Fenton</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/experience"}>
              <NavLink>Experience</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <ThemeToggle/>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
