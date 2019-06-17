/*

  App Page

  App container component.

*/
import React, { useState } from "react";

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function AppPage() {
  const [isNewTodoFormActive, setNewTodoFormActive] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  function openNewTodoForm() {
    setNewTodoFormActive(true);
  }

  function closeNewTodoForm() {
    setNewTodoFormActive(false);
  }

  function submitNewTodoForm(newTodoItem) {
    const newTodoList = [newTodoItem, ...todoItems];
    setTodoItems(newTodoList);
    setNewTodoFormActive(false);
  }

  function toggleTodoComplete(index) {
    const newTodoList = [...todoItems];
    newTodoList[index].complete = !newTodoList[index].complete;
    setTodoItems(newTodoList);
  }

  if (isNewTodoFormActive) {
    return (
      <NewTodoForm
        onSubmitForm={submitNewTodoForm}
        onDiscard={closeNewTodoForm}
      />
    );
  } else {
    return (
      <TodoList
        todoListItems={todoItems}
        createTodoAction={openNewTodoForm}
        toggleTodoComplete={toggleTodoComplete}
      />
    );
  }
}
