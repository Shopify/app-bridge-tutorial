import { Layout, Page, Card } from "@shopify/polaris";
import { TitleBar, Button } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  componentDidMount() {
    var app = this.props.app;

    // 1. Create a button
    var buttonOptions = {
      label: "Welcome to my app"
    };
    var welcomingButton = Button.create(app, buttonOptions);

    // 2. Create a title bar and pass in the button
    var titleBarOptions = {
      title: "Home",
      buttons: {
        primary: welcomingButton
      }
    };
    var titleBar = TitleBar.create(app, titleBarOptions);
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
