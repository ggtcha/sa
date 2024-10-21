// TaskAdmin.js
import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext'; 
import { useNavigate } from 'react-router-dom';
import './TaskAdmin.css'; 

const TaskAdmin = () => {
    const { tasks, addTask, updateTaskStatus } = useContext(TaskContext);
    const [newTask, setNewTask] = useState({
        Number: '',
        project: '',
        status: 'Pending',
        startDate: '',
        deadline: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        console.log("Task added:", newTask);
        navigate('/task');
    };

    const handleStatusChange = (taskId, newStatus) => {
        updateTaskStatus(taskId, newStatus);
    };

    return (
        <div className="task-admin-container">
            <h1>Task Admin</h1>
            <form onSubmit={handleSubmit} className="task-form">
                <input 
                    type="text" 
                    name="project" 
                    placeholder="Project Name" 
                    value={newTask.project} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                />
                <select 
                    name="status" 
                    value={newTask.status} 
                    onChange={handleChange} 
                    required 
                    className="form-select"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <input 
                    type="date" 
                    name="startDate" 
                    value={newTask.startDate} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                />
                <input 
                    type="date" 
                    name="deadline" 
                    value={newTask.deadline} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                />
                <button type="submit" className="submit-button">Add Task</button>
            </form>
            {tasks.length > 0 ? (
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Project Name</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.No}</td>
                                <td>{task.project}</td>
                                <td>{task.status}</td>
                                <td>{task.startDate}</td> 
                                <td>{task.deadline}</td>
                                <td>
                                    <button className="status-button" onClick={() => handleStatusChange(task.id, 'In Progress')}>In Progress</button>
                                    <button className="status-button" onClick={() => handleStatusChange(task.id, 'Completed')}>Completed</button>
                                    <button className="status-button" onClick={() => handleStatusChange(task.id, 'Pending')}>Pending</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No tasks available.</p>
            )}
        </div>
    );
};

export default TaskAdmin;
