import React, {useState} from 'react';
import Navbar from "reactstrap/es/Navbar";
import {NavbarToggler} from "reactstrap";
import Collapse from "reactstrap/es/Collapse";
import Nav from "reactstrap/es/Nav";
import NavItem from "reactstrap/es/NavItem";
import NavLink from "reactstrap/es/NavLink";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <Navbar expand="md" className={"navigation" + (open ? " open" : "")}>
      <NavbarToggler onClick={toggleNavbar} >
        <button className={"hamburger hamburger--collapse" + (open ? " is-active" : "")} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
        </button>
      </NavbarToggler>


      <Collapse isOpen={open} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Gavin Fenton</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/experience">Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
