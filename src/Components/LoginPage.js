import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const auth = getAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit Triggered");

    try {
      const response = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);

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
        <div className='row'>

          <div align="center" style={{ marginTop: "210px", color: "white" }} className='col-xxl-6'>
            <h1 style={{ fontSize: "50px" }}> Welcome Back</h1>

            <p style={{ marginTop: "50px", fontWeight: "bold" }}>If you don't have account, please create new Account.</p>
            <button style={{ borderRadius: "30px" }} onClick={() => { navigate('/register') }} className='btn btn-primary btn-lg'>Create Account</button>
          </div>


          <div style={{ marginTop: "140px" }} className='col-xxl-6'>
            <div className="modal('show')">
              <div style={{ width: "100%" }} className="modal-dialog modal-dialog-centered" >
                {/* <div style={{ backgroundColor: "aqua" }} className="modal-content"> */}
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title"><b>Login to your account</b></h3>
                  </div>
                  <div className="modal-body">

                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                          <input style={{ color: "white" }} type="email" required className="form-control bg-dark" value={credentials.email} onChange={onChange} id="email" name='email' placeholder="name@example.com" />
                          <label style={{ color: "white" }} htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input style={{ color: "white" }} type="password" required className="form-control bg-dark" value={credentials.password} onChange={onChange} id="password" name='password' placeholder='Password' />
                          <label style={{ color: "white" }} htmlFor="password">Password</label>
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


        </div>
      </div>
    </>
  )
}

export default LoginPage;