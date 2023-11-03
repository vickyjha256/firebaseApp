import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import Alert from "./Components/Alert";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [alert, setalert] = useState({ type: "", text: "" });
  const showAlert = (type, text) => {
    setalert({ type, text });
    setTimeout(() => {
      setalert("");
    }, 1500);
  }

  const auth = getAuth();

  const [isLoggedin, setisLoggedin] = useState(false);
  const [username, setusername] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setisLoggedin(true);
        setusername(user.displayName);
        console.log("LoggedIn: " + isLoggedin);
      } else {
        console.log("User not logged in.");
      }
    });
  }, []);


  return (
    <Router>
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert} isLoggedin={isLoggedin} username={username} />} />
        <Route exact path='/login' element={<LoginPage showAlert={showAlert} />} />
        <Route exact path='/register' element={<SignUpPage showAlert={showAlert} />} />
      </Routes>
    </Router>
  );
}

export default App;
