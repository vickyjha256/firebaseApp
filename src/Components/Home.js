import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("User Still Logged in.");
    }
    else {
      props.showAlert("info", "Please login.");
      console.log("User still Logged Out");
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div style={{ color: "white" }} className='container fluid'>
        <h1> Welcome:  {props.username} </h1>
      </div>
    </>
  );
}

export default Home;