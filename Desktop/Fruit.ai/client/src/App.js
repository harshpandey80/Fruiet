import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path as needed
import Login from "./components/Login"; // Adjust path as needed
import Signup from "./components/Signup"; // Adjust path as needed
import AboutUs from "./components/Aboutus"; // Adjust path as needed
import Translate from "./components/Translate"; // Adjust path as needed
import Chatbot from "./components/Chatbot"; // Adjust path as needed
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
// import AboutUs from "./components/Aboutus";

// import AboutUs from './components/Aboutus';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/login" element=  {<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/translate" element={<ProtectedRoute><Translate /> </ProtectedRoute> } />
        <Route path="/chatbot" element={ <ProtectedRoute> <Chatbot /> </ProtectedRoute> } />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Home />} />
       
      </Routes>
      {/* <FAQ></FAQ> */}
      {/* <AboutUs></AboutUs> */}
      <Footer></Footer>
    </Router>
  );
};

export default App;
