import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginBox from './LoginBox';

const LoginPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>

          <div id='leftbox' align="center" style={{ color: "white" }} className='col-md-6'>
            {/* <div align="center" style={{ color: "white" }} className='col-xxl-6'> */}
            <h1 style={{ fontSize: "50px" }}> Welcome Back</h1>

            <p style={{ marginTop: "50px", fontWeight: "bold" }}>If you don't have account, please create new Account.</p>
            <button style={{ borderRadius: "30px" }} onClick={() => { navigate('/register') }} className='btn btn-primary btn-lg'>Create Account</button>
          </div>


          <div id='authbox' className='col-md-6'>
            <LoginBox showAlert={props.showAlert} />
          </div>


        </div>
      </div>
    </>
  )
}

export default LoginPage;