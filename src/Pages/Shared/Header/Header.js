import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {

    const { user, logOut, name, email, passUser, createNewUser } = useAuth();
    console.log("user: ", user);

    console.log("header passUser: ", passUser.displayName);
    console.log("header name: ", user?.displayName)
    return (
        <div className="header-conpo">
            <Navbar collapseOnSelect className="navbar-color" expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-clinic-medical"></i><span className="site-name open-learning-initiative-color">Medscape</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "blanchedalmond"
                            }} to="/home">Home</NavLink>

                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "blanchedalmond"
                            }} to="/equipment">Equipment </NavLink>
                            <NavLink className="nav-bar" activeStyle={{
                                fontWeight: "bold",
                                color: "blanchedalmond"
                            }} to="/about">About us</NavLink>


                            {

                                user.email ? <button className="header-logout-btn" onClick={logOut}>LogOut</button> : <NavLink className="nav-bar" activeStyle={{
                                    fontWeight: "bold",
                                    color: "blanchedalmond"
                                }} to="/login">LogIn</NavLink>
                            }


                            {/* {
                                user.email && <p className="p">{user?.displayName}</p>
                            } */}


                            {
                                user.email ? <p className="p">{user?.displayName}</p> : <p className="p">{passUser?.displayName}</p>
                            }



                            {/* {
                                passUser.email && <p className="p">{passUser?.displayName}</p>
                            } */}


                            {/* {
                                createNewUser.displayName && <p className="p">{createNewUser.displayName}</p>
                            } */}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;