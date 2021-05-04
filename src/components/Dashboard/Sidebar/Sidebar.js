import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import firebaseConfig from "../../Login/firebase.config";
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const handleSignOut = () => {
        firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
        console.log('logout click')
        firebase.auth().signOut().then(() => {
            sessionStorage.removeItem('token');
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        fetch('https://boiling-ravine-47755.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    useEffect(() => {
        fetch('https://boiling-ravine-47755.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>

                {
                    isDoctor && <div>
                        <li>
                            <Link to="/dashboard/appointment" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/patients" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>All Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/prescriptions" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>
                        {
                            isAdmin && <div>
                                <li>
                                    <Link to="/dashboard/addDoctor" className="text-white">
                                        <FontAwesomeIcon icon={faUser} /> <span>Add Doctor</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addAdmin" className="text-white">
                                        <FontAwesomeIcon icon={faUser} /> <span>Add Admin</span>
                                    </Link>
                                </li>
                            </div>
                        }
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div onClick={handleSignOut} style={{ cursor: 'pointer' }}>
                <Link to="/"><FontAwesomeIcon className="text-white" icon={faSignOutAlt} /> <span className="text-white">Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;