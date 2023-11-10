import React, { useState } from 'react';
import './Navi.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './App.css';

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md" className='ps-5 pe-5 navbar-warning bg-warning'>
        <NavbarBrand href="/" className="mr-auto fs-3 font-weight-bold ">Freeze Moment</NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto navbar-warning bg-warning " />
        <Collapse isOpen={isOpen} navbar className='justify-content-end  '>
          <Nav className="mr-auto  " navbar>
            <NavItem>
              <NavLink  href="#">Category</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="#">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cart
              </DropdownToggle>
              <DropdownMenu right className='navbar-warning bg-warning mt-1 borderless text-right'>
                <DropdownItem>Product 1</DropdownItem>
                <DropdownItem>Product 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Show Cart</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
