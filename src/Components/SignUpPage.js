import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';


const SignUpPage = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", conpassword: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.password !== credentials.conpassword) {
            props.showAlert("danger", "Passwords are not equal.");
            return;
        }

        console.log("Submit Triggered");

        try {
            const response = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

            const user = await updateProfile(response.user, {displayName: credentials.name});

            console.log("Response returned.");
            console.log(response.user);
            console.log("USer: " + user);

            // navigate('/');
        } catch (error) {
            console.log("Error: " + error);
            props.showAlert("danger", "User already exist with this email.");
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>

                    <div align="center" style={{ marginTop: "210px", color: "white" }} className='col-xxl-6'>
                        <h1 style={{ fontSize: "50px" }}> Hii There! 😉</h1>

                        <p style={{ marginTop: "50px", fontWeight: "bold" }}> Already have an account? </p>
                        <button style={{ borderRadius: "30px" }} onClick={() => { navigate('/login') }} className='btn btn-primary btn-lg'>Login Account</button>
                    </div>


                    <div style={{ marginTop: "110px" }} className='col-xxl-6'>
                        <div className="modal('show')">
                            <div style={{ width: "100%" }} className="modal-dialog modal-dialog-centered" >
                                {/* <div style={{ backgroundColor: "aqua" }} className="modal-content"> */}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title"><b>Create new account</b></h5>
                                    </div>
                                    <div className="modal-body">

                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-floating mb-3">
                                                    <input style={{ color: "white" }} type="text" required className="form-control bg-dark" value={credentials.name} onChange={onChange} id="name" name='name' minLength={3} placeholder="name@example.com" />
                                                    <label style={{ color: "white" }} htmlFor="name">Name</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input style={{ color: "white" }} type="email" required className="form-control bg-dark" value={credentials.email} onChange={onChange} id="email" name='email' placeholder="name@example.com" />
                                                    <label style={{ color: "white" }} htmlFor="email">Email</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input style={{ color: "white" }} type="password" required className="form-control bg-dark" value={credentials.password} onChange={onChange} id="password" name='password' minLength={5} placeholder='Password' />
                                                    <label style={{ color: "white" }} htmlFor="password">Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input style={{ color: "white" }} type="password" required className="form-control bg-dark" value={credentials.conpassword} onChange={onChange} id="conpassword" name='conpassword' minLength={5} placeholder='Password' />
                                                    <label style={{ color: "white" }} htmlFor="conpassword">Confirm Password</label>
                                                </div>

                                                <button style={{ width: "100%", backgroundColor: "#042459" }} type="submit" className="btn btn-primary"><b>Sign Up</b></button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SignUpPage;