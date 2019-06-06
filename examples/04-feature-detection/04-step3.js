import { Layout, Page, Card } from "@shopify/polaris";
import { Features, Group } from "@shopify/app-bridge/actions";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: "?",
      features: ""
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

    // 2. What features are available to us in this context?
    app.featuresAvailable().then(function(featureState) {
      console.log(featureState);
      setState(function() {
        return { features: JSON.stringify(featureState, null, 2) };
      });
    });

    // 3. Request an unavailable feature
    var featureRequest = Features.create(app);

    features.subscribe(Features.Action.REQUEST_UPDATE, function(response) {
      console.log(response);
    });

    features.dispatch(Features.Action.REQUEST, {
      feature: Group.Scanner
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
              <Card.Section title="Features">
                <pre>{this.state.features}</pre>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
