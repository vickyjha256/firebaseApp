import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState({type: "", text: ""});
  const showAlert = (type, text) => {
    setalert({type, text});
    setTimeout(() => {
      setalert("");
    }, 1500);
  }

  return (
    <Router>
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<LoginPage showAlert={showAlert} />} />
        <Route exact path='/register' element={<SignUpPage showAlert={showAlert} />} />
      </Routes>
    </Router>
  );
}

export default App;
