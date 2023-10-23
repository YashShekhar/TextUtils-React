import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClassList = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeBodyClassList();
    document.body.classList.add('bg-' + cls);
    if (cls === 'success') {
      setMode('success');
      showAlert("Success mode has been enabled", "success");
    } else if (cls === 'warning') {
      setMode('warning');
      showAlert("Warning mode has been enabled", "success");
    } else if (cls === 'danger') {
      setMode('danger');
      showAlert("Danger mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
    } else if (cls === 'primary') {
      setMode('primary');
      showAlert("Primary mode has been enabled", "success");
    } else if (cls === 'light') {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
