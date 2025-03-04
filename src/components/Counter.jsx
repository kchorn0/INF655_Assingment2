import React, { useState } from "react";

const Counter = () => {
  // useState hook to manage the count TASK 2
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Button that increases count when clicked */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Counter;
