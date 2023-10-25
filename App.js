import React, { useState } from "react";
import TaskList from "./TaskList";
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: "", description: "" });
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1></h1>
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        selectTask={setSelectedTask}
        updateTask={updateTask}
        selectedTask={selectedTask}
      />
      <div>
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
}

export default App;