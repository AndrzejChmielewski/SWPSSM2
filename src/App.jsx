import React from 'react'
import { Billing, Business, Order, Contacts, Services, Footer, Navbar, Reports, Testimonials, Hero } from "./components";
import "./CSS/index.css";

import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const App = () => (


  
  <div>
      <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Hero />} default />
        <Route path="/home" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Contacts" element={<Contacts />} />

      </Routes>
      </Router>
      
      <Footer />
  </div>
);


export default App;