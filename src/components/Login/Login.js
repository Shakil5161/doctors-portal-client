import React, { useContext } from 'react';
import './Login.css';
import loginImg from '../../images/loginImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleHandler = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                // var user = result.user;
                const  {displayName, email, photoURL} = result.user;
                const userInfo = {
                    isLoggedIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL,
                    success: true,
                }
                setLoggedInUser(userInfo);
                sessionStorage.setItem('token', token);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <div className="login-page">
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="  text-center pb-5">
                                <div className="row px-3 mt-4 mb-5 "> <img src={loginImg} className="image" /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3 d-flex">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div onClick={googleHandler} className="google text-center mr-3">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </div>
                                    <div className="facebook text-center mr-3">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div>
                                    <div className="twitter text-center mr-3">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className="linkedin text-center mr-3">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </div>

                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">Or</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Email Address</h6>
                                </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline d-flex">
                                        <label for="chk1" className="custom-control-label text-sm">Remember me</label>  <input id="chk1" type="checkbox" name="chk" className="custom-control-input check-box w-25" /> </div> <a href="#" className="ml-auto mb-0 pt-3 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue border-0 text-center">Login</button> </div>
                                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small> </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;