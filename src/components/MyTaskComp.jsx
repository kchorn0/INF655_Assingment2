import React from "react";

const TaskComponent = () => {
  const tasks = ["Learn React", "Practice JSX", "Build a project", "Watch Ramsey Videos", "Review Code"];

  return (
    <div>
      <h2>Task List:</h2>
      {/* Map over the tasks array and assign a unique key to each list item TASK 3*/}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;

