
import React, { useState, useEffect } from "react";

function UpdateTaskForm({ task, updateTask, setSelectedTask }) {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  useEffect(() => {
    setUpdatedTask({ ...task });
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    setSelectedTask(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedTask.title}
        onChange={(e) =>
          setUpdatedTask({ ...updatedTask, title: e.target.value })
        }
      />
      <button type="submit">Update</button>
      <button onClick={() => setSelectedTask(null)}>Cancel</button>
    </form>
  );
}

export default UpdateTaskForm;