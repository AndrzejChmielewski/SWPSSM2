import React from 'react';
import '../CSS/Services.css';

const Services = () => {
  return (
    <div className="services">
      <h1 className="title">Nasze usługi</h1>
      <p className="subtitle">Oferujemy wiele usług związanych z naprawą i wsparciem technicznym Twojego urządzenia mobilnego.</p>
      <div className="services-container">
        <div className="service-item">
          <img src="/images/screen-repair.png" alt="Wymiana ekranu" />
          <h2 className="service-title">Wymiana ekranu</h2>
          <p className="service-description">Jeśli Twój ekran został uszkodzony, wymienimy go na nowy i sprawimy, że Twój telefon będzie działał jak nowy.</p>
        </div>
        <div className="service-item">
          <img src="/images/software-update.png" alt="Aktualizacja oprogramowania" />
          <h2 className="service-title">Aktualizacja oprogramowania</h2>
          <p className="service-description">Jeśli potrzebujesz aktualizacji oprogramowania, pomożemy Ci zaktualizować system operacyjny i aplikacje na Twoim urządzeniu.</p>
        </div>
        <div className="service-item">
          <img src="/images/battery-replacement.png" alt="Wymiana baterii" />
          <h2 className="service-title">Wymiana baterii</h2>
          <p className="service-description">Jeśli Twój telefon działa zbyt krótko na jednym ładowaniu, wymienimy baterię na nową i przywrócimy pełną funkcjonalność Twojego urządzenia.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;