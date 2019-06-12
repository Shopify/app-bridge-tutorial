import createApp from "@shopify/app-bridge";
import { TitleBar } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

const appBridgeClient = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: shopOrigin,
  forceRedirect: true
});

console.log(appBridgeClient);

const titleBar = TitleBar.create(appBridgeClient, {
  title: "Home"
});
