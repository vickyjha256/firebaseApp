import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import Alert from "./Components/Alert";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Components/Navbar";
// import Temp from "./Components/Temp";
import FileUpload from "./Components/FileUpload";

function App() {
  const [alert, setalert] = useState({ type: "", text: "" });
  const showAlert = (type, text) => {
    setalert({ type, text });

    setTimeout(() => {
      setalert("");
    }, 1500);
  }

  const auth = getAuth();
  const [username, setusername] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setusername(user.displayName);
        localStorage.setItem("token", user.uid);

        const timer = setTimeout(() => {
          auth.signOut();
          localStorage.removeItem("token");
          window.location.reload();
        }, (60 * 60 * 1000));

        return () => { clearTimeout(timer); }
      } else {
        console.log("User not logged in.");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />

        <Routes>
          {/* <Route exact path='/' element={<Temp showAlert={showAlert} username={username} />} /> */}
          <Route exact path='/' element={<Home showAlert={showAlert} username={username} />} />
          <Route exact path='/upload' element={<FileUpload showAlert={showAlert} />} />
          <Route exact path='/login' element={<LoginPage showAlert={showAlert} />} />
          <Route exact path='/register' element={<SignUpPage showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
