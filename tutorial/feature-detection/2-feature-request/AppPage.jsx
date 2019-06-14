/*

  App Page

*/
import React, { useState } from "react";
import createApp from "@shopify/app-bridge";
import { Features, Group, Scanner } from "@shopify/app-bridge/actions";

import Cookies from "js-cookie";
const shopOrigin = Cookies.get("shopOrigin");

import Log from "./Log";

const app = createApp({
  apiKey: SHOPIFY_API_KEY,
  shopOrigin: shopOrigin,
  forceRedirect: true
});

export default function AppPage() {
  const [logOutput, setLogOutput] = useState("Click a button above!");

  const actions = [
    {
      label: "featuresAvailable",
      onClick: featuresAvailable
    },
    {
      label: "requestScanner",
      onClick: requestScanner
    },
    {
      label: "Scan barcode",
      onClick: useScanner
    }
  ];

  function featuresAvailable() {
    app.featuresAvailable().then(function(featureState) {
      setLogOutput(featureState);
    });
  }

  function requestScanner() {
    const scannerRequest = Features.create(app);

    scannerRequest.subscribe(Features.Action.REQUEST_UPDATE, function(payload) {
      setLogOutput(payload);
    });

    scannerRequest.dispatch(Features.Action.REQUEST, {
      feature: Group.Scanner,
      action: Scanner.Action.OPEN_CAMERA
    });

    setLogOutput("Requesting scanner...");
  }

  function useScanner() {
    const scanner = Scanner.create(app);
    scanner.subscribe(Scanner.Action.CAPTURE, function(payload) {
      setLogOutput(payload.data.scanData);
    });
    scanner.dispatch(Scanner.Action.OPEN_CAMERA);
  }

  return <Log output={logOutput} actions={actions} />;
}
