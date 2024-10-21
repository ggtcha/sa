import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>แดชบอร์ดผู้ดูแลระบบ</h1>
      <p>ยินดีต้อนรับสู่แผงควบคุมของผู้ดูแลระบบ</p>
      <div className="dashboard-cards">
        <div className="dashboard-box"> 
          <h2>สถิติยอดขาย</h2>
          <p>ดูข้อมูลการขายล่าสุดของคุณ</p>
        </div>
        <div className="dashboard-box">
          <h2>ผู้ใช้ที่ใช้งาน</h2>
          <p>จัดการผู้ใช้ที่ลงทะเบียน</p>
        </div>
        <div className="dashboard-box"> 
          <h2>รายงาน</h2>
          <p>ดูรายงานทั้งหมด</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
