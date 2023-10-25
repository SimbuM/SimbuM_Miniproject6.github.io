import React, { useState } from "react";

function UpdateTask({ task, updateTask, selectTask }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSubmit = () => {
    updateTask(task.id, updatedTask);
    selectTask(null);
  };

  return (
    <div>
      <h3>Update Task</h3>
      <input
        type="text"
        value={updatedTask.title}
        onChange={(e) =>
          setUpdatedTask({ ...updatedTask, title: e.target.value })
        }
      />
      <textarea
        value={updatedTask.description}
        onChange={(e) =>
          setUpdatedTask({ ...updatedTask, description: e.target.value })
        }
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default UpdateTask;
