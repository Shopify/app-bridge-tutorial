import { Layout, Page, Card } from "@shopify/polaris";
import { Modal } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  componentDidMount() {
    var app = this.props.app;

    // 1. Create a modal
    var modalOptions = {
      title: "Informative modal",
      message: "Here’s some information I think you should know."
    };
    this.informativeModal = Modal.create(app, modalOptions);
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
