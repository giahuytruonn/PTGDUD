import React from "react";
import StudentApp from "./components/StudentApp";
import TodoApp from "./components/ToDoApp";

function App() {
  return (
    <div className="App">
      <h1>Quản Lý Sinh Viên</h1>
      <StudentApp />

      <h1>Todo List</h1>
    </div>
  );
}

export default App;