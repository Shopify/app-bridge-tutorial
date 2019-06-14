/*

  App Page

*/
import React from "react";
import createApp from "@shopify/app-bridge";
import { TitleBar } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import TodoList from "./TodoList";

export default function AppPage() {
  const appBridgeClient = createApp({
    apiKey: SHOPIFY_API_KEY,
    shopOrigin: shopOrigin,
    forceRedirect: true
  });

  const titleBar = TitleBar.create(appBridgeClient, {
    title: "Home"
  });

  // ********************************************************

  return <TodoList todoListItems={[]} />;
}
