// src/TaskDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../TaskContext'; // นำเข้า TaskContext
import './taskDetails.css'; // สไตล์สำหรับ TaskDetails

const TaskDetails = () => {
    const { id } = useParams(); // ดึง id จาก URL
    const { tasks } = useContext(TaskContext); // ใช้ Context

    const task = tasks.find(t => t.id === parseInt(id)); // หา task โดยใช้ id

    return (
        <div className="task-details">
            <h2>รายละเอียดงาน</h2>
            {task ? (
                <div className="task-info">
                    <p><strong>โปรเจค:</strong> {task.project}</p>
                    <p><strong>สถานะ:</strong> <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span></p>
                    <p><strong>มอบหมายให้:</strong> {task.assignedTo}</p>
                    <p><strong>กำหนดส่ง:</strong> {task.deadline}</p>
                </div>
            ) : (
                <p>ไม่พบข้อมูลงานนี้</p>
            )}
        </div>
    );
};

export default TaskDetails;
