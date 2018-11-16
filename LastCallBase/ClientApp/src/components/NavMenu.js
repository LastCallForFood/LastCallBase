import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>LastCallBase</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
                 <NavItem>
                        <Glyphicon glyph='education' /> Simple Demo
                 </NavItem>
            </LinkContainer>
            <LinkContainer to={'/mealoffers'}>
                 <NavItem>
                    <Glyphicon glyph='th-list' /> Show Meal Offers
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/getsubscriberdata'}>
                <NavItem>
                    <Glyphicon glyph='th-list' /> Get Subscriber Data
                </NavItem>
             </LinkContainer>
                    <LinkContainer to={'/getsupplierdata'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Get Supplier Data
                </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/registersubscriber'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Register Subscriber
                </NavItem>
                    </LinkContainer>
             <LinkContainer to={'/baseservice'}>
                <NavItem>
                    <Glyphicon glyph='th-list' /> Base Service Example
                </NavItem>
             </LinkContainer>
                    <LinkContainer to={'/postservice'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Post Example
                </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/fetchsubscriberandpreferences'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Complex Object Fetch
                </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/aboutus'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> About Us
                </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/login'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Login
                </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/splash'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Splash
                </NavItem>
                    </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
