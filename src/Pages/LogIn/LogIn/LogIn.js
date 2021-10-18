import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        email,
        name,
        password
    } = useAuth();



    console.log("name: ", name);
    console.log("mail: ", email);
    console.log("pass: ", password);

    return (
        <div className="form-container">
            <div className="logInForm">

                <form onClick={handleRegistration}>
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


                    {/* <div className="row mb-3 text-danger">
                        {error}
                    </div> */}

                    {/* <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </div> */}



                    <button type="submit" class="btn btn-primary button-color">{isLogIn ? 'Login' : 'Register'}</button>
                </form>
                <button className="googlesignin" onClick={signInUsingGoogle}>Sign In with Google</button>



            </div>
        </div>
    );
};

export default LogIn;