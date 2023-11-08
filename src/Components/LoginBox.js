import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const LoginBox = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submit Triggered");

        try {
            const response = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);

            props.showAlert("success", "Logged in successfully.");
            console.log("Response returned.");
            console.log(response.user);

            navigate('/');
        } catch (error) {
            console.log("Error: " + error);
            props.showAlert("danger", "Invalid email or password.");
        }

    }

    // const btmove = (e) => {
    //   let movingBtn = document.getElementById("outdiv");
    //   if (credentials.email || credentials.password === "") {
    //     if (movingBtn.className === "d-flex justify-content-start") {
    //       movingBtn.className = Math.floor(Math.random() * 12) > 6 ? "d-flex justify-content-center" : "d-flex justify-content-end"
    //     } else if (movingBtn.className === "d-flex justify-content-center") {
    //       movingBtn.className = Math.floor(Math.random() * 12) > 6 ? "d-flex justify-content-start" : "d-flex justify-content-end"
    //     } else if (movingBtn.className === "d-flex justify-content-end") {
    //       movingBtn.className = Math.floor(Math.random() * 12) > 6 ? "d-flex justify-content-start" : "d-flex justify-content-center"
    //     }
    //   }
    //   else {
    //     movingBtn.className = "d-flex justify-content-center";
    //   }
    // }

    const navigate = useNavigate();

    return (
        <>
            <div className='container-fluid'>
                <div className="modal('show')">
                    <div className="modal-dialog modal-dialog-centered" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title"><b>Login to your account</b></h3>
                            </div>
                            <div className="modal-body">

                                <div className=''>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="email" required className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' placeholder="name@example.com" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" required className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' placeholder='Password' />
                                            <label htmlFor="password">Password</label>
                                        </div>

                                        <button style={{ width: "100%", backgroundColor: "#042459" }} type="submit" className="btn btn-primary my-1"><b>Login</b></button>

                                        {/* <div id='outdiv' className='d-flex justify-content-center'>
                          <div style={{ width: "30%" }} id='indiv' onMouseOver={(credentials.email || credentials.password) === "" ? btmove : ""}>
                            <button disabled={credentials.email === "" || credentials.password === ""} style={{ width: "100%", backgroundColor: "blue" }} type="submit" className="btn btn-primary my-1"><b>Login</b></button>
                          </div>
                        </div> */}
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

export default LoginBox;