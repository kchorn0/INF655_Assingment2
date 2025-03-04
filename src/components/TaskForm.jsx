import React, { useState } from "react";

const TaskForm = () => {
  // useState hook to store input value TASK 5
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task:", task); // Log to consoel
    setTask(""); // Clear input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering a task */}
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
