import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  useEffect(() => {
    if (!props.isLoggedin) {
      props.showAlert("info", "Please login.");
      navigate('/login');
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className='container fluid'>
        <h1> Welcome:  {props.username} </h1>
      </div>
    </>
  );
}

export default Home;