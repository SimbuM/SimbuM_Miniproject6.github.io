
import React from "react";
function Task({ task, removeTask, selectTask }) {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
      <button onClick={selectTask}>Edit</button>
    </li>
  );
}
export default Task;
