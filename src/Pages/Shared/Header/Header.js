import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import userEvent from '@testing-library/user-event';
const Header = () => {

    const { user, logOut, name } = useAuth();
    console.log(user);

    return (
        <div className="header-conpo">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-clinic-medical"></i><span className="site-name open-learning-initiative-color">Medicine</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "orange"
                            }} to="/home">Home</NavLink>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "orange"
                            }} to="/medicines">Medicines</NavLink>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "orange"
                            }} to="/equipment">Equipment </NavLink>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "orange"
                            }} to="/about">About us</NavLink>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "orange"
                            }} to="/login">LogIn</NavLink>
                            {/* <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "orange"
                            }} to="/login">LogIn</NavLink> */}
                            {

                                user.email && <button className="header-logout-btn" onClick={logOut}>LogOut</button>
                            }


                            {
                                user.email && <p className="p">{user?.displayName}</p>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;