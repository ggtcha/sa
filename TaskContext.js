// TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            project: 'Project Alpha',
            status: 'Pending',
            startDate: '2024-10-20', 
            deadline: '2024-11-20',
        },
        {
            id: 2,
            project: 'Project Beta',
            status: 'In Progress',
            startDate: '2024-10-21',
            deadline: '2024-12-01',
        },
    ]);

    const addTask = (newTask) => {
        setTasks(prevTasks => [
            ...prevTasks,
            { id: Date.now(), ...newTask }
        ]);
    };

    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(prevTasks => 
            prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
