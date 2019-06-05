import { Layout, Page, Card, Button, Stack } from "@shopify/polaris";
import { Size as ModalSize } from "@shopify/app-bridge/actions/Modal";

var lorems = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur, velit nec bibendum pretium, mauris tortor condimentum nulla, quis vehicula quam elit at arcu. Sed feugiat enim bibendum, molestie erat vel, varius dui. Curabitur imperdiet sem non sem accumsan ultricies. Cras et purus ex. Suspendisse potenti. Etiam sed tempor velit. Aenean congue sem a augue rutrum posuere. Curabitur sit amet justo rhoncus, dictum tellus ac, placerat sapien. In a neque porta ex consequat malesuada vel sit amet enim. Maecenas maximus felis ex, eu vehicula lacus vehicula in.",
  "Nam id porta sem. Phasellus dignissim turpis ante, quis gravida eros gravida eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget ipsum tincidunt, interdum eros a, pharetra nisl. Suspendisse dignissim posuere mauris, a facilisis diam porttitor ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ullamcorper aliquam diam, id tristique justo tempus vel.",
  "Nunc eget magna lacus. Praesent risus tellus, egestas vel fermentum sit amet, varius eget augue. Sed volutpat magna magna, et ultrices orci efficitur non. Nullam quis nibh eu purus posuere iaculis in vitae metus. Duis volutpat nibh eget libero fringilla sodales. Nullam orci justo, malesuada vitae malesuada ac, luctus id magna. Duis elit velit, imperdiet pretium tristique nec, blandit et felis. Quisque et feugiat mi.",
  "Nam in diam a quam ultrices maximus. Vivamus sollicitudin auctor mauris, vel tincidunt velit tincidunt nec. Mauris dictum venenatis ultricies. Vestibulum a blandit dolor. Ut tempor rutrum elit et consectetur. Integer dictum rutrum viverra. Duis ornare sollicitudin ante vitae tincidunt. Aenean lectus mauris, scelerisque sit amet aliquet vel, fringilla eget lorem.",
  "Integer justo ex, varius vel lectus et, tempor consequat dui. Sed porta accumsan eros, a tempus tortor. Morbi quam ex, maximus nec elit nec, eleifend commodo nibh. Donec eget felis venenatis, ultricies eros vel, gravida tellus. Donec a dui vitae mauris dapibus luctus. Integer non erat et ipsum vestibulum efficitur. In et imperdiet quam, sed congue arcu. Morbi vel varius magna, at lacinia velit. Morbi gravida pulvinar mattis. Quisque et metus vitae nisl interdum pharetra. Ut quis risus vel erat bibendum fermentum. Curabitur vulputate sit amet nibh sed egestas. Cras ornare tortor a molestie tempus. Nullam quis magna diam. Integer imperdiet consequat velit in fringilla."
];

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numParagraphs: 0
    };

    this.addContent = this.addContent.bind(this);
    this.removeContent = this.removeContent.bind(this);
  }

  componentDidMount() {
    var app = this.props.app;

    // detect modal size and apply styles for Auto sizing
    app.getState().then(function(appState) {
      if (appState.modal.size === ModalSize.Auto) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "auto";
        document.body.style.minHeight = "auto";
      }
    });
  }

  addContent() {
    this.setState(function(state) {
      return {
        numParagraphs: state.numParagraphs + 1
      };
    });
  }

  removeContent() {
    this.setState(function(state) {
      var numParagraphs = state.numParagraphs - 1;
      if (numParagraphs < 0) {
        numParagraphs = 0;
      }
      return {
        numParagraphs: numParagraphs
      };
    });
  }

  render() {
    var paragraphs = [];
    var loremIndex = 0;
    for (var index = 0; index < this.state.numParagraphs; index++) {
      paragraphs.push(
        <Card.Section key={index}>{lorems[loremIndex]}</Card.Section>
      );
      loremIndex += 1;
      if (loremIndex >= 5) {
        loremIndex = 0;
      }
    }
    return (
      <Page>
        <Layout>
          <Layout.Section>
            <Card>
              <Card.Section>
                <Stack vertical>
                  <p>Hello from an iframe modal!</p>
                  <Stack>
                    <Button onClick={this.addContent}>Add content</Button>
                    <Button onClick={this.removeContent}>Remove content</Button>
                  </Stack>
                </Stack>
              </Card.Section>
              {paragraphs}
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
