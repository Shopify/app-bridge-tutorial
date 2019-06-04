import { Layout, Page, Card } from "@shopify/polaris";
import { Button, TitleBar, Toast } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  componentDidMount() {
    var app = this.props.app;

    // 1. Create a button
    var buttonOptions = {
      label: "Welcome to my app"
    };
    var welcomingButton = Button.create(app, buttonOptions);

    // 2. Subscribe to the button’s click event
    welcomingButton.subscribe(Button.Action.CLICK, welcomingButtonCallback);

    // 3. Create a title bar and pass in the button
    var titleBarOptions = {
      title: "Home",
      buttons: {
        primary: welcomingButton
      }
    };
    var titleBar = TitleBar.create(app, titleBarOptions);

    // 4. Update the button’s options
    function welcomingButtonCallback() {
      welcomingButton.set({
        label: "Thinking...",
        disabled: true
      });

      // 5. Show a toast message
      setTimeout(function() {
        var toastOptions = {
          message: "Hi from App Bridge"
        };
        var welcomeMessage = Toast.create(app, toastOptions);
        welcomeMessage.dispatch(Toast.Action.SHOW);

        // and reset our button
        welcomingButton.set({
          label: "Welcome to my app",
          disabled: false
        });
      }, 1000);
    }
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
