import React, { useState } from 'react';
import { Navbar, NavbarToggler,Nav, NavItem, Collapse} from 'reactstrap';
import { NavLink} from 'react-router-dom';
export function Header() {
  const [isCollapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!isCollapsed);
  return (
    <>
      <Navbar dark expand="md"  color="secondary">
        <img src="./assets/logod.png" alt="logo" width="5%"/>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isCollapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to='/' className='nav-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about' className='nav-link'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/contact' className='nav-link'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}