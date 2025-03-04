import React from "react";
import Greeting from "./components/MyFunComp";
import UserInfo from "./components/MyClassComp";
import TaskComponent from "./components/MyTaskComp";
import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  // Function to show an alert (Task 4)
  const handleAlert = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="App">
      {/* Task 1: Passing props to Greeting */}
      <Greeting username="Kyle" />
      <Greeting username="Ramsey" />

      {/* Task 2: Counter Component */}
      <Counter />

      {/* Task 3: Display Task List */}
      <TaskComponent />

      {/* Task 5: Controlled Form */}
      <TaskForm />

      {/* Task 4: Pass function as prop */}
      <UserInfo handleClick={handleAlert} />

      
    </div>
  );
}

export default App;
