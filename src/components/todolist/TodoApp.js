import React from "react";
import AddTodo from "./AddTodo";
// import TodoList from "./TodoList";
// import VisibilityFilters from "./components/VisibilityFilters";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            {/* <VisibilityFilters /> */}
        </div>
    );
}