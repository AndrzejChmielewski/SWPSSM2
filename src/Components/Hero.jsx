import React from 'react'
import '../CSS/Hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="hero">
      <h1 className="title">Witaj w naszym serwisie wsparcia technicznego urządzeń mobilnych</h1>
      <p className="subtitle">Znajdziesz tutaj pomoc w rozwiązywaniu problemów z Twoim urządzeniem mobilnym, takimi jak: problemy z systemem, baterią, aplikacjami i innymi.</p>
      <Link to="/contacts">
        <button className="button">Skontaktuj się z nami</button>
      </Link>
    </div>
  )
}

export default Hero