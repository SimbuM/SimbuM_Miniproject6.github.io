
import React, { useState } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import UpdateTaskForm from "./UpdateTaskForm";
import UpdateTask from "./UpdateTask";
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
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
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            selectTask={() => setSelectedTask(task)}
          />
        ))}
      </ul>
      {selectedTask && (
        <UpdateTaskForm
          task={selectedTask}
          updateTask={updateTask}
          setSelectedTask={setSelectedTask}
        />
      )}
    </div>
  );
}

export default TaskList;
