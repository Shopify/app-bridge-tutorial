import React from "react";
import { Page, Layout, Card } from "@shopify/polaris";

export default function Log(props) {
  const formattedOutput = JSON.stringify(props.output, null, 2);

  return (
    <Page title="Log">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <pre
              style={{
                fontFamily: "monospace",
                fontSize: "1.15em"
              }}
            >
              {formattedOutput}
            </pre>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
