import React from "react";
import StudentApp from "./components/StudentApp";
import TodoApp from "./components/ToDoApp";
import './index.css'


function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoApp />

      <h1>Quản Lý Sinh Viên</h1>
      <StudentApp/>
    </div>
  );
}

export default App;