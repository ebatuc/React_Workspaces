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


function Navi({ cartCount, showCart, clearCart, cartItems }) {
  //! It opens dropdown menu, reactstrap feature.
  const [DropOpen, setDropOpen] = React.useState(false);
  const toggleDrop = () => setDropOpen(!DropOpen);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const calculateCartTotal = () => {
    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.price;
    }
    return total;
  };


  return (
    <div>
      <Navbar light expand="md" className='ps-5 pe-5 navbar-warning bg-warning'>
        <NavbarBrand href="/" className="mr-auto fs-3 font-weight-bold ">Freeze Moment</NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto navbar-warning bg-warning " />
        <Collapse isOpen={isOpen} navbar className='justify-content-end  '>
          <Nav className="mr-auto  " navbar>
            <NavItem>
              <NavLink href="#">Category </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="#">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
            <NavItem>
              {/* //!"()" is only visual nothing for code. */}
              <NavLink >Cart Items: ({cartCount}) ~ Total: {calculateCartTotal()}$</NavLink>
            </NavItem>
            {showCart ? (
              <NavItem>
                <UncontrolledDropdown nav inNavbar isOpen={DropOpen} toggle={toggleDrop}>
                  <DropdownToggle nav caret>
                    Cart
                  </DropdownToggle>
                  <DropdownMenu right className='navbar-warning bg-warning mt-1 borderless '>
                    {cartItems.map((item, index) => (
                      <DropdownItem key={index}>{item.name} ~ {item.price}$</DropdownItem>
                    ))}
                    {cartCount > 0 && <DropdownItem divider />}
                    {cartCount > 0 && (<DropdownItem onClick={clearCart}>Delete All</DropdownItem>)}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            ) : null}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
