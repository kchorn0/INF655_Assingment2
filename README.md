# Kyle Horn Proj 2 for INF655 VA S2025

Assignment Instructions:
This assignment builds on Assignment 1 and introduces new concepts: Props, State, Lists, Keys, and Forms.

Tasks Task 1: Use Props to Pass Data (5 Points) Modify your Greeting component to accept a prop called username. Display the username inside the greeting message. In App.js, render Greeting twice with different usernames. Example Output:

Hello, Alice!
Hello, Bob!

Task 2: Manage State with useState (5 Points) Create a Counter component. Use the useState hook to track a count value. Display the count and a button to increase the count when clicked. Example Output:

Count: 0
Click Me
Clicking the button increases the count

Task 3: Display a List with Keys (5 Points) In App.js, create an array of 5 tasks. Use the .map function to display the tasks in an unordered list. Add a unique key for each task. Example Output:

Task 1
Task 2
Task 3
Task 4: Pass Functions as Props (5 Points) Modify your UserInfo component to accept a prop called handleClick. In App.js, create a function handleAlert that shows an alert when the button is clicked. Pass handleAlert as a prop to UserInfo. Example Output:

Name: John Doe
Profession: Developer
Show Alert
Clicking the button shows an alert message

Task 5: Create a Controlled Form (5 Points) Create a TaskForm component. Add an input field for entering a task name. Use useState to store the input value. Add a Submit button that logs the input to the console. Example Output:

Enter Task Name
Add Task
Clicking the button logs the task to the console



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
