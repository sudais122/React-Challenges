import React, { useState } from "react";
import "./App.css";

type Task = {
  text: string;
  check: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value.trim() === "") {
      setErr("Please enter a task.");
      return;
    }

    setTasks([
      ...tasks,
      {
        text: value,
        check: false,
      },
    ]);

    setValue("");
    setErr("");
  }

  function toggleTask(index: number) {
    const updatedTasks = [...tasks];
    updatedTasks[index].check = !updatedTasks[index].check;
    setTasks(updatedTasks);
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function clearCompleted() {
    const updatedTasks = tasks.filter((task) => !task.check);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h2>Todo List</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {err && <p className="error">{err}</p>}

      <p className="count">Total Tasks: {tasks.length}</p>

      {tasks.map((task, index) => (
        <div className="task" key={index}>
          <div className="task-left">
            <input
              type="checkbox"
              checked={task.check}
              onChange={() => toggleTask(index)}
            />

            <span className={task.check ? "completed" : ""}>
              {task.text}
            </span>
          </div>

          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}

      {tasks.some((task) => task.check) && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default App;