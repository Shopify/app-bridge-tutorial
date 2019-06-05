import { Layout, Page, Card } from "@shopify/polaris";
import { Modal, Button } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.getAppState = this.getAppState.bind(this);
  }

  componentDidMount() {
    var app = this.props.app;

    var goodButton = Button.create(app, { label: "Ok, cool." });
    var badButton = Button.create(app, { label: "I don’t like it." });

    var modalOptions = {
      title: "Iframe modal",

      // Change the modal create payload to use an iframe.
      path: "/modal",
      size: Modal.Size.Medium,

      footer: {
        buttons: {
          primary: goodButton,
          secondary: [badButton]
        }
      }
    };
    this.informativeModal = Modal.create(app, modalOptions);

    goodButton.subscribe(Button.Action.CLICK, function() {
      console.log("They liked the iframe.");
      informativeModal.dispatch(Modal.Action.CLOSE);
    });

    badButton.subscribe(Button.Action.CLICK, function() {
      console.log("They didn’t like the iframe.");
      informativeModal.dispatch(Modal.Action.CLOSE);
    });
  }

  openModal() {
    this.informativeModal.dispatch(Modal.Action.OPEN);
  }

  // Log the app state
  getAppState() {
    var app = this.props.app;
    var setState = this.setState.bind(this);

    app.getState().then(function(appState) {
      console.log("appState:", appState);
    });
  }

  render() {
    return (
      <Page title="App Bridge Tutorial">
        <Layout>
          <Layout.Section>
            <Card
              sectioned
              primaryFooterAction={{
                content: "Show me an iframe",
                onAction: this.openModal
              }}
              secondaryFooterAction={{
                content: "getState",
                onAction: this.getAppState
              }}
            >
              <p>Welcome to the App Bridge workshop at Shopify Unite 2019!</p>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
