import React, { useState } from 'react'
import { Input, Button } from 'antd'
const ToDoForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (!task.trim()) return;
        onAddTask({ id: Date.now(), title: task, completed: false });
        setTask('');
    };

    return (
        <div className='flex justify-between items-center gap-4'>
            <Input
                size="large"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button type="primary" size="large" onClick={handleAdd}>
                Add 
            </Button>
        </div>
    )
}

export default ToDoForm