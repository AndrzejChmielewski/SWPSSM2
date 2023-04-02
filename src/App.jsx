import React from 'react'
import { Billing, Business, CardDeal, Contacts, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import "./index.css";

const App = () => (

  <div>
      <Navbar />
      <div className="container">
        <article>
          <h1></h1>
        </article>
      </div>
      
      <div>
        <Hero />
      </div>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Contacts />
      <CTA />
      <Footer />
  </div>
);

export default App;