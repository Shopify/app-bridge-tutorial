/*

  App Page

*/
import React from "react";
import createApp from "@shopify/app-bridge";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import TodoList from "./TodoList";

const appBridgeClient = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: shopOrigin,
  forceRedirect: true
});

export default function AppPage() {
  console.log("appBridgeClient:", appBridgeClient);

  return <TodoList todoListItems={[]} />;
}
