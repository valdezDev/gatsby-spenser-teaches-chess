import { Link, animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types"
import React from "react"
import icon from '../images/rook.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" dark expand="sm">
          <div className="container">
          <Link
            activeClass="active"
            to="row-1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}>
            <NavbarBrand href="/">
              <img className="rook" src={icon} />{this.props.siteTitle}
            </NavbarBrand>
          </Link>
          <NavbarToggler className="nav-toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link
                activeClass="active"
                to="about-me__title"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
              </Link>
              <Link
                activeClass="active"
                to="card-3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                  <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
              </Link>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
