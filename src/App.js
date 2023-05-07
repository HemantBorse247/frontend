import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrainDataService from './services/trainServices'
import Upload from "./components/Upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
import FrontPage from "./components/FrontPage"
import Contacts from "./components/Contacts";
import Bookings from "./components/Bookings";
import Passenger from "./components/Passenger";
import Login1 from "./components/Login1";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import PaymentInfo from "./components/PaymentInfo"
import InfoPassenger from './components/InfoPassenger'
import Boom from "./components/Boom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/login" element={<Login1/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentInfo" element={<PaymentInfo />} />
        <Route path="/confirmation" element={<Boom />} />
        
      </Routes>
    </Router>
  );
}

export default App;


