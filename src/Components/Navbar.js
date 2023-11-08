import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogOut = () => {
        // e.preventDefault();
        auth.signOut();
        localStorage.removeItem("token");
        navigate('/login');
    }

    const [showLogOut, setshowLogOut] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setshowLogOut(true);
            }
        })
    }, [])


    return (
        <>
            <div className=''>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Firebase App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link style={{ fontWeight: `${location.pathname === "/" ? "bold" : ""}` }} className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link style={{ fontWeight: `${location.pathname === "/upload" ? "bold" : ""}` }} className={`nav-link ${location.pathname === '/upload' ? "active" : ""}`} aria-current="page" to="/upload">Upload</Link>
                                </li>
                            </ul>
                            {showLogOut ? <button onClick={handleLogOut} className="btn btn-warning">Log Out</button> : null}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;