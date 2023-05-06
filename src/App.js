import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrainDataService from './services/trainServices'
import Upload from "./components/Upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
import FrontPage from "./components/FrontPage"
import Contacts from "./components/Contacts";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;


