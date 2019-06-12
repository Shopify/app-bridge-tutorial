import createApp from "@shopify/app-bridge";
import { TitleBar, Button } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

const appBridgeClient = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: shopOrigin,
  forceRedirect: true
});

console.log(appBridgeClient);

const newTodoButton = Button.create(appBridgeClient, { label: "New Todo" });

newTodoButton.subscribe(Button.Action.CLICK, function() {
  console.log("clicked!");
});

const titleBar = TitleBar.create(appBridgeClient, {
  title: "Home",
  buttons: { primary: newTodoButton }
});
