/*

  App Page

*/
import React, { useState } from "react";
import createApp from "@shopify/app-bridge";
import { TitleBar, Button } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import TodoList from "./TodoList";

export default function AppPage() {
  const appBridgeClient = createApp({
    apiKey: SHOPIFY_API_KEY,
    shopOrigin: shopOrigin,
    forceRedirect: true
  });

  const newTodoButton = Button.create(appBridgeClient, { label: "New Todo" });

  newTodoButton.subscribe(Button.Action.CLICK, function() {
    console.log("clicked!");
  });

  const titleBar = TitleBar.create(appBridgeClient, {
    title: "Home",
    buttons: { primary: newTodoButton }
  });

  // ********************************************************

  return <TodoList todoListItems={[]} />;
}
