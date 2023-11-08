import React from 'react'
import { useNavigate } from 'react-router-dom';
import SignupBox from './SignupBox';

const SignUpPage = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>

                    <div id='leftbox' align="center" style={{color: "white" }} className='col-xxl-6'>
                        <h1 style={{ fontSize: "50px" }}> Hii There! 😉</h1>

                        <p style={{ marginTop: "50px", fontWeight: "bold" }}> Already have an account? </p>
                        <button style={{ borderRadius: "30px" }} onClick={() => { navigate('/login') }} className='btn btn-primary btn-lg'>Login Account</button>
                    </div>


                    <div id='authbox' className='col-xxl-6'>
                        <SignupBox showAlert={props.showAlert} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default SignUpPage;