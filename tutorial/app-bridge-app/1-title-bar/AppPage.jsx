/*

  App Page

*/
import React, { useEffect } from "react";
import createApp from "@shopify/app-bridge";
import { TitleBar } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import TodoList from "./TodoList";

const app = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: shopOrigin,
  forceRedirect: true
});

export default function AppPage() {
  useEffect(function() {
    const titleBar = TitleBar.create(app, {
      title: "Home"
    });
  }, false);

  return <TodoList todoListItems={[]} />;
}
