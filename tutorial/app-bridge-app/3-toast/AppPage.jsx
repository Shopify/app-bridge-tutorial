/*

  App Page

  App container component.

*/
import React, { useState, useEffect } from "react";
import createApp from "@shopify/app-bridge";
import { TitleBar, Button, Toast } from "@shopify/app-bridge/actions";
import Cookies from "js-cookie";

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const app = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: Cookies.get("shopOrigin"),
  forceRedirect: true
});

const newTodoButton = Button.create(app, { label: "Create todo" });

const titleBar = TitleBar.create(app, {
  title: "Home",
  buttons: { primary: newTodoButton }
});

const confirmNewTodoToast = Toast.create(app, { message: "Todo saved." });

export default function AppPage() {
  const [isNewTodoFormActive, setNewTodoFormActive] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(function() {
    newTodoButton.subscribe(Button.Action.CLICK, function() {
      openNewTodoForm();
    });
  }, false);

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
    confirmNewTodoToast.dispatch(Toast.Action.SHOW);
  }

  function toggleTodoComplete(index) {
    const newTodoList = [...todoItems];
    newTodoList[index].complete = !newTodoList[index].complete;
    setTodoItems(newTodoList);
  }

  if (isNewTodoFormActive) {
    newTodoButton.set({ disabled: true });
    return (
      <NewTodoForm
        onSubmitForm={submitNewTodoForm}
        onDiscard={closeNewTodoForm}
      />
    );
  } else {
    newTodoButton.set({ disabled: false });
    return (
      <TodoList
        todoListItems={todoItems}
        createTodoAction={openNewTodoForm}
        toggleTodoComplete={toggleTodoComplete}
      />
    );
  }
}
