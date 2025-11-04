"use client";

import React from "react";
import TodoForm from "./todos/TodoForm";
import TodoItem from "./todos/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ListGroup } from "react-bootstrap";

interface Todo {
  id: number | string;
  title: string;
}

export default function TodoListComponent() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
  );
}
