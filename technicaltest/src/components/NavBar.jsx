import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/PopulationData">DashBoard</NavLink>

            <NavLink to="/Home">Home</NavLink>

            <NavLink to="/Registration">Registration</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
