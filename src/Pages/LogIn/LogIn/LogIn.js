import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './LogIn.css';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,
        handleRegistration,
        isLogIn,
        error,
    } = useAuth();
    return (
        <div className="form-container">
            <div className="logInForm">

                <form onSubmit={handleRegistration}>
                    <h2>{!isLogIn ? "Register" : "LogIn"}</h2>
                    {
                        !isLogIn && <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input onBlur={handleNameChange} type="name" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                    }
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="row mb-3 check-button">
                                    <div className="col-sm-10 offset-sm-2">
                                        <div className="form-check">
                                            <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" htmlFor="gridCheck1">
                                                Already Registered?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>

                    </Container>
                    <div className="row mb-3 text-danger error-message">
                        {error}
                    </div>
                    <button type="submit" class="btn btn-primary button-color">{isLogIn ? 'Login' : 'Register'}</button>
                </form>
                <button className="googlesignin" onClick={signInUsingGoogle}>Sign In with Google</button>
            </div>
        </div>
    );
};

export default LogIn;