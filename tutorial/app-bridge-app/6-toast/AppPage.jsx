/*

  App Page

*/
import React, { useState, useEffect } from "react";
import createApp from "@shopify/app-bridge";
import { TitleBar, Button, Toast } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const app = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: shopOrigin,
  forceRedirect: true
});

export default function AppPage() {
  const [isNewTodoFormActive, setNewTodoForm] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  let newTodoButton;
  useEffect(function() {
    newTodoButton = Button.create(app, { label: "New Todo" });

    newTodoButton.subscribe(Button.Action.CLICK, function() {
      setNewTodoForm(true);
    });

    const titleBar = TitleBar.create(app, {
      title: "Home",
      buttons: { primary: newTodoButton }
    });
  });

  function submitNewTodoForm(newTodoItem) {
    const newTodoList = [newTodoItem, ...todoItems];
    setTodoItems(newTodoList);
    setNewTodoForm(false);

    const confirmNewTodoToast = Toast.create(app, {
      message: "Todo saved."
    });
    confirmNewTodoToast.dispatch(Toast.Action.SHOW);
  }

  function discardNewTodoForm() {
    setNewTodoForm(false);
  }

  if (isNewTodoFormActive) {
    newTodoButton.set({ disabled: true });
    return (
      <NewTodoForm
        app={app}
        onSubmit={submitNewTodoForm}
        onDiscard={discardNewTodoForm}
      />
    );
  } else {
    return <TodoList todoListItems={todoItems} />;
  }
}
