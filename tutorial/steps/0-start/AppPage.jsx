/*

  App Page

*/
import React from "react";
import createApp from "@shopify/app-bridge";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import TodoList from "./TodoList";

export default function AppPage() {
  // Create App Bridge client
  const appBridgeClient = createApp({
    apiKey: SHOPIFY_API_KEY,
    shopOrigin: shopOrigin,
    forceRedirect: true
  });

  console.log("appBridgeClient:", appBridgeClient);

  // ********************************************************

  return <TodoList todoListItems={[]} />;
}
