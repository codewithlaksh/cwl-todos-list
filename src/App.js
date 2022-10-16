import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from './pages/Home';
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
