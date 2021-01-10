import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default function FCHeader() {
  return (
    <div>
<Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>My Kitchen</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="AddIngredient">
      <Nav.Link>Add Ingredient</Nav.Link>
      </LinkContainer>
      <LinkContainer to="AddRecipe">
      <Nav.Link>Add Recipe</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </div>
  )
}