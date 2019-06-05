import { Layout, Page, Card } from "@shopify/polaris";

class Index extends React.Component {
  componentDidMount() {
    var app = this.props.app;
    console.log("App Bridge instance:", app);
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
