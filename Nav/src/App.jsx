import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "/src/index.css";


import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events"
import Login from "./pages/Login";
import Membership from "./pages/Membeship";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
