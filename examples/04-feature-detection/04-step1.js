import { Layout, Page, Card } from "@shopify/polaris";
import { Features, Group } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: "?"
    };
  }

  componentDidMount() {
    var app = this.props.app;
    var setState = this.setState.bind(this);

    // 1. What context are we running in?
    app.getState("context").then(function(context) {
      console.log("We are running in the", context, "context.");
      setState(function() {
        return { context: context };
      });
    });
  }

  render() {
    return (
      <Page title="App Bridge Tutorial">
        <Layout>
          <Layout.Section>
            <Card>
              <Card.Section>
                <p>Welcome to the App Bridge workshop at Shopify Unite 2019!</p>
              </Card.Section>
              <Card.Section>
                <p>We are running in the {this.state.context} context.</p>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
