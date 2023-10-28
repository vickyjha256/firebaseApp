import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/register' element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
