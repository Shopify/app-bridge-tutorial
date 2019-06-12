import { Layout, Page, Card } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  componentDidMount() {
    var app = this.props.app;

    /*

      These options are invalid!

      If you're using the development version of App Bridge,
      you’ll see a detailed error message.

      To use the development version:

      In package.json, add NODE_ENV=development to scripts.test

      scripts: {
        ...
        "dev": "NODE_ENV=development node server.js",
      }

    */

    var toastOptions = {
      message: { content: "Hi from App Bridge" }
    };
    var welcomeMessage = Toast.create(app, toastOptions);
    welcomeMessage.dispatch(Toast.Action.SHOW);
  }

  render() {
    return (
      <Page title="App Bridge Tutorial">
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <p>Welcome to the App Bridge workshop at Shopify Unite 2019!</p>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
