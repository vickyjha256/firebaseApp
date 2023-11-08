import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const SignupBox = (props) => {
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

            const user = await updateProfile(response.user, { displayName: credentials.name });

            props.showAlert("success", "Account Created Successfully.")
            console.log("Response returned.");
            console.log(response.user);
            console.log("USer: " + user);

            navigate('/login');
        } catch (error) {
            console.log("Error: " + error);
            props.showAlert("danger", "User already exist with this email.");
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <div className='container-fluid'>
                <div className="modal('show')">
                    <div className="modal-dialog modal-dialog-centered" >
                        {/* <div style={{ backgroundColor: "aqua" }} className="modal-content"> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><b>Create new account</b></h5>
                            </div>
                            <div className="modal-body">

                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="text" required className="form-control" value={credentials.name} onChange={onChange} id="name" name='name' minLength={3} placeholder="name@example.com" />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" required className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' placeholder="name@example.com" />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="password" required className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' minLength={5} placeholder='Password' />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" required className="form-control" value={credentials.conpassword} onChange={onChange} id="conpassword" name='conpassword' minLength={5} placeholder='Password' />
                                            <label htmlFor="conpassword">Confirm Password</label>
                                        </div>

                                        <button style={{ width: "100%", backgroundColor: "#042459" }} type="submit" className="btn btn-primary"><b>Sign Up</b></button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupBox