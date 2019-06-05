import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import createApp from "@shopify/app-bridge";
import "@shopify/polaris/styles.css";
import Cookies from "js-cookie";

class MyApp extends App {
  constructor(props) {
    super(props);

    this.app = createApp({
      apiKey: API_KEY,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true
    });
  }

  render() {
    var Component = this.props.Component;
    var pageProps = this.props.pageProps;

    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider>
          <Component {...pageProps} app={this.app} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
