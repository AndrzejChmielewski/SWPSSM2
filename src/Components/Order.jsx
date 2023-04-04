import React, { useState } from 'react';
// import firebase from '../firebase';
import '../CSS/Order.css';

const Order = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const ordersRef = firebase.database().ref('orders');
    const order = { name, email, device, issue };
    ordersRef.push(order);
    setName('');
    setEmail('');
    setDevice('');
    setIssue('');
  };

  return (
    <div className="order">
      <h1 className="title">Zgłoś usterkę</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">Imię i nazwisko</label>
        <input
          className="input"
          type="text"
          placeholder="Twoje imię i nazwisko"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="label">Adres e-mail</label>
        <input
          className="input"
          type="email"
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="label">Urządzenie</label>
        <input
          className="input"
          type="text"
          placeholder="Nazwa urządzenia"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          required
        />
        <label className="label">Opis usterki</label>
        <textarea
          className="textarea"
          placeholder="Opis usterki"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        ></textarea>
        <button className="button" type="submit">
          Wyślij zgłoszenie
        </button>
      </form>
    </div>
  );
};

export default Order;