/*

  App root

*/
import createApp from "@shopify/app-bridge";

import Cookies from "js-cookie";

import "./style.css";

import { renderTodoItems } from "./view-helpers";

let app; // App Bridge client instance

const todoItems = [{ name: "hi" }];
const activeView = "list";

const dom = {
  container: document.querySelector("#container"),
  listView: document.querySelector("#listview"),
  newTodoView: document.querySelector("#newtodoview"),
  todoListEmptyState: document.querySelector("#emptystate"),
  todoList: document.querySelector("#todolist")
};

function updateActiveView() {
  if (activeView === "list") {
    dom.listView.classList.add("is-active");
    dom.newTodoView.classList.remove("is-active");
  } else if (activeView === "newTodo") {
    dom.newTodoView.classList.add("is-active");
    dom.listView.classList.remove("is-active");
  }
}

function render() {
  updateActiveView();

  if (todoItems.length) {
    dom.todoListEmptyState.classList.remove("is-active");
    dom.todoList.classList.add("is-active");

    renderTodoItems(todoItems, dom.todoList);
  } else {
    dom.todoList.classList.remove("is-active");
    dom.todoListEmptyState.classList.add("is-active");
  }
}

function initializeApp() {
  // Create App Bridge client instance
  const shopOrigin = Cookies.get("shopOrigin");
  app = createApp({
    apiKey: SHOPIFY_API_KEY,
    shopOrigin: shopOrigin,
    forceRedirect: true
  });

  console.log("app:", app);

  dom.container.classList.remove("is-loading");
  render();
}

document.addEventListener("DOMContentLoaded", initializeApp);
