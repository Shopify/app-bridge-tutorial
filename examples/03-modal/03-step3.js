import { Layout, Page, Card } from "@shopify/polaris";
import { Modal, Button } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    var app = this.props.app;

    // 3. Add buttons
    var goodButton = Button.create(app, { label: "Ok, cool." });
    var badButton = Button.create(app, { label: "I don’t like it." });

    var modalOptions = {
      title: "Informative modal",
      message:
        "Here’s some information I think you should know. What do you think?",
      footer: {
        buttons: {
          primary: goodButton,
          secondary: [badButton]
        }
      }
    };
    this.informativeModal = Modal.create(app, modalOptions);

    // Subscribe to the buttons’ click events
    goodButton.subscribe(Button.Action.CLICK, function() {
      console.log("They are cool with it.");
      informativeModal.dispatch(Modal.Action.CLOSE);
    });

    badButton.subscribe(Button.Action.CLICK, function() {
      console.log("They didn’t like it.");
      informativeModal.dispatch(Modal.Action.CLOSE);
    });
  }

  openModal() {
    this.informativeModal.dispatch(Modal.Action.OPEN);
  }

  render() {
    return (
      <Page title="App Bridge Tutorial">
        <Layout>
          <Layout.Section>
            <Card
              sectioned
              primaryFooterAction={{
                content: "Talk to me",
                onAction: this.openModal
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
