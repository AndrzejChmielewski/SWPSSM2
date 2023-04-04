import React, { useState } from 'react';
import '../CSS/Reports.css';

const mockReports = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-789',
    email: 'johndoe@example.com',
    problemDescription: 'My phone screen is cracked.',
    dateSubmitted: new Date(),
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '987-654-321',
    email: 'janedoe@example.com',
    problemDescription: 'My phone battery doesn\'t last long.',
    dateSubmitted: new Date(),
  },
];

const Reports = () => {
  const [reports, setReports] = useState(mockReports);

  return (
    <div className="reports">
      <h1 className="title">Zgłoszenia serwisowe</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Telefon</th>
            <th>E-mail</th>
            <th>Opis problemu</th>
            <th>Data zgłoszenia</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.firstName}</td>
              <td>{report.lastName}</td>
              <td>{report.phone}</td>
              <td>{report.email}</td>
              <td>{report.problemDescription}</td>
              <td>{report.dateSubmitted.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;