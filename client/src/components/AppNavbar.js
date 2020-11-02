import React, { Component } from 'react';
import {
Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';


class AppNavbar extends Component {
    
    state = {
        isOpen:false
    }
    
    toggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    link = () => {
        if (window.location.href === "http://localhost:3000/about") {
            return "Go to Shopping List";
        } else {
            return "Go to About"
        }
    }

    url = () => {
        if (window.location.href === "http://localhost:3000/about") {
            return "/";
        } else {
            return "/about"
        }
    }

    render() {
        return (
            <div>
                {console.log(window.location.href)}
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href={this.url()}>{this.link()}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar >
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <NavLink href="https://github.com/ashwinhprasad/Items-Mern" >
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>          
            </div>
        )
    }
}

export default AppNavbar
