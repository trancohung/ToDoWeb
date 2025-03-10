import './App.css'
import { useState } from 'react'
import ToDoForm from './components/ToDoForm';
import TodoList from './components/TodoList';
import { Tabs } from "antd";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  }

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      } else {
        return task;
      }
    }))
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else {
      return !task.completed;
    }
  })

  const items = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <>
      <main className="w-full h-screen p-8 flex justify-center">
        <div className="w-1/2 border border-gray-300 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-8">#todo</h1>
          <Tabs
            defaultActiveKey="all"
            items={items}
            onChange={(key) => setFilter(key)}
            centered
          />
          <ToDoForm onAddTask={handleAddTask} />
          <TodoList
            tasks={filteredTasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </main>
    </>
  );
};


export default App
