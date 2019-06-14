/*

  App Page

*/
import React, { useState, useEffect } from "react";
import createApp from "@shopify/app-bridge";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import Log from "./Log";

export default function AppPage() {
  const [logOutput, setLogOutput] = useState("");

  useEffect(function() {
    const app = createApp({
      apiKey: SHOPIFY_API_KEY,
      shopOrigin: shopOrigin,
      forceRedirect: true
    });

    app.featuresAvailable().then(function(featureState) {
      setLogOutput(featureState);
    });
  }, false);

  return <Log output={logOutput} />;
}
