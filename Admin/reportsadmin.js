import React from 'react';
import './ReportsAdmin.css'; 

const ReportsAdmin = () => {
  const reports = [
    { title: 'Sales Report', date: new Date('2024-09-19') },
    { title: 'Inventory Report', date: new Date('2024-09-20') },
    { title: 'Customer Feedback Report', date: new Date('2024-09-21') },
  ];

  return (
    <div className="reports-admin-container">
      <h2>Admin Reports</h2>
      <p className="reports-description">Here you can view various admin reports.</p>

      <ul className="reports-list">
        {reports.map((report, index) => (
          <li key={index} className="report-item">
            <strong>{report.title}</strong> - {report.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsAdmin;
