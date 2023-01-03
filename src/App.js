import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import { useState } from "react";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Services from "./Pages/ServicesPage/Services";

function App() {
  //Handle Dropdown menu shown
  const [menuShown, setMenuShown] = useState(false);
  const handleMenuShown = () => {
    setMenuShown((current) => !current);
  };

  return (
    <>
      <Router>
        <Navbar menuShown={menuShown} handleMenuShown={handleMenuShown} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
