import { Layout, Page, Card, Button } from "@shopify/polaris";
import { Modal } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    var app = this.props.app;

    var modalOptions = {
      title: "Informative modal",
      message:
        "Here’s some information I think you should know. What do you think?"
    };
    this.informativeModal = Modal.create(app, modalOptions);
  }

  // 2. Dispatch the modal open event
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
