
import React, { useState } from "react";

function AddTaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({ id: Date.now(), title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title) {
      addTask(newTask);
      setNewTask({ id: Date.now(), title: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default AddTaskForm;
