import React, { useState } from 'react';
import { Navbar, Container, Column } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import "../../styles/header.scss";

function Header(){
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={LogoImage} />
                    </Link>
                    <Navbar.Burger
                        className="nav-burger burger"
                        arial-label="menu"
                        arial-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <Column.Group>
                            <Column>
                                <Link to="/register" className="button is-white has-text-custom-purple">Cadastro</Link>
                            </Column>
                            <Column>
                                <Link to="/login" className="button is-outlined is-custom-purple">Entrar</Link>
                            </Column>
                        </Column.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default Header;