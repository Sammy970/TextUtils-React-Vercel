import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alerts from "./components/Alert";

// import Login from "./components/Login";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// let name = "Sammy";
function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not

  const [alert, setAlert] = useState(null); //For alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#6f2cf5";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils by Samyak" mode={mode} toggleMode={toggleMode} />

        <div className="container my-3">
          <Alerts alert={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
