import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";

import "@shopify/polaris/styles.css";

import AppPage from "./AppPage";

const rootElement = document.createElement("div");
document.querySelector("body").appendChild(rootElement);

ReactDOM.render(
  <AppProvider>
    <AppPage />
  </AppProvider>,
  rootElement
);
